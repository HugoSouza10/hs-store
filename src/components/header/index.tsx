"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  Menu,
  ShoppingCart,
  HouseIcon,
  LogOutIcon,
  PercentIcon,
  ListOrderedIcon,
  User,
  ShoppingCartIcon,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SheetContent,
  SheetTrigger,
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import CartItem from "../cart/cart-item";
import { createCheckout } from "@/services/payment";
// Em qualquer componente do carrinho
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { createOrder } from "@/app/_actions/order/create-order";
import { toast } from "sonner";

const Header = () => {
  const { data: session } = useSession();
  const { products, subtotal, totalDiscount, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    console.log(products);
    try {
      console.log("USER ID:", session?.user?.id);
      if (!products.length) {
        toast("Carrinho vazio!");
        return;
      }
      if (!session?.user?.id) {
        await signIn("google"); // 👈 redireciona pro login
        return;
      }
      setLoading(true);
      await createOrder({
        items: products.map((product) => ({
          id: product.id,
          quantity: product.quantity, // ou do seu cart real
          price: product.productWithDiscount ?? product.basePrice,
        })),
        subtotal: Number(subtotal),
        discount: Number(totalDiscount),
        total: Number(total),
      });
      clearCart();
      toast("Compra realizada!");
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    } finally {
      setLoading(false);
    }

    // try {
    //    setLoading(true);
    //    const data = await createCheckout(products);
    //    if (data.checkout) {
    //       window.location.href = data.checkout;
    //    }
    //  } catch (error) {
    //    console.error(error);
    //  } finally {
    //    setLoading(false);
    //  }
  }
  return (
    <header className="mb-7">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="border-0 hover:bg-transparent"
              variant="ghost"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-2">
              <ul className="flex flex-col gap-3">
                {session?.user && (
                  <li className="flex items-center gap-2 py-2 px-4">
                    <Avatar>
                      <AvatarImage
                        src={session.user.image ?? ""}
                        alt={session.user.name ?? "User"}
                      />
                      <AvatarFallback>
                        {session.user.name?.charAt(0).toUpperCase() ?? "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div>{session.user.name}</div>
                      <div className="text-gray-300">Boas compras!</div>
                    </div>
                  </li>
                )}
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium"
                  >
                    <HouseIcon size={16} />
                    Início
                  </Link>
                </SheetClose>
                {session?.user ? (
                  // Se o usuário estiver logado, mostra o botão de sair
                  <li
                    onClick={() => signOut()}
                    className="border flex border-[#1A1A1A] rounded-sm py-2 px-4"
                  >
                    <button className="inline-flex items-center text-sm gap-2 font-medium">
                      <LogOutIcon size={16} />
                      Sair
                    </button>
                  </li>
                ) : (
                  // Se não estiver logado, mostra o botão de login
                  <li
                    onClick={() => signIn("google")}
                    className="flex border border-[#1A1A1A] rounded-sm py-2 px-4 font-medium"
                  >
                    <button className="inline-flex items-center text-sm gap-2 font-medium">
                      <LogOutIcon size={16} />
                      Fazer Login
                    </button>
                  </li>
                )}

                <SheetClose asChild>
                  <Link
                    href="/"
                    className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium"
                  >
                    <PercentIcon size={16} />
                    Ofertas
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/catalog"
                    className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium"
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/my-orders"
                    className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium"
                  >
                    <ShoppingBasket size={16} />
                    Meus pedidos
                  </Link>
                </SheetClose>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="text-lg font-medium">
          <span className="font-bold bg-gradient-to-r from-[#5033C3] to-[#8162FF] bg-clip-text text-transparent">
            {" "}
            HS{" "}
          </span>
          <span>Store</span>
        </Link>
        {/* Carrinho */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-auto" side="right">
            <div className="flex flex-col h-full mt-5">
              <Badge
                className="w-fit border border-primary rounded-full py-1 pb-1"
                variant="outline"
              >
                <ShoppingCartIcon className="h-4 w-4 mr-2 fill-white" />
                <span className="font-bold text-base">CARRINHO</span>
              </Badge>

              {products.length > 0 && (
                <ScrollArea className="h-[300px] w-full rounded-md border">
                  {products.map((product) => (
                    <CartItem product={product} key={product.id} />
                  ))}
                </ScrollArea>
              )}

              {/* Total e Botão de Finalizar Compra */}
              {products.length > 0 ? (
                <div className="mt-11">
                  <div>
                    <div>
                      <Separator className="bg-accent" />
                      <div className="flex justify-between">
                        <span className="text-xs pt-2 pb-2">Subtotal</span>
                        <span className="text-xs pt-2 pb-2">
                          {subtotal.toFixed(2)}
                        </span>
                      </div>
                      <Separator className="bg-accent" />
                      <div className="flex justify-between">
                        <span className="text-xs pt-2 pb-2">Entrega</span>
                        <span className="text-xs pt-2 pb-2">GRÁTIS</span>
                      </div>
                      <Separator className="bg-accent" />
                      <div className="flex justify-between">
                        <span className="text-xs pt-2 pb-2">Desconto</span>
                        <span className="text-xs pt-2 pb-2">
                          -R$ {totalDiscount.toFixed(2)}
                        </span>
                      </div>
                      <Separator className="bg-accent" />
                      <div className="flex justify-between font-bold">
                        <span className="text-xs pt-2 pb-2">Total</span>
                        <span className=" text-xs pt-2 pb-2">
                          R$ {total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    disabled={!products.length || loading}
                    onClick={handleCheckout}
                    className="mt-4 w-full"
                  >
                    {loading ? "Processando..." : "Finalizar Compra"}
                  </Button>
                </div>
              ) : (
                <p className="mt-11 text-sm text-base">
                  Carrinho vazio
                </p>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
