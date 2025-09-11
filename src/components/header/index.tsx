

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Menu, ShoppingCart, HouseIcon, LogOutIcon, PercentIcon, ListOrderedIcon, User, ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SheetContent, SheetTrigger, Sheet, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from '@/components/ui/badge';
import CartItem from '../cart/cart-item';
// Em qualquer componente do carrinho
import { useCart } from '@/context/CartContext';

const Header = () => {
   const { data: session } = useSession();
   const { products, subtotal, totalDiscount, total} = useCart();
   //console.log(products);
   return (
       <header className='mb-7'>
         <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Sheet>
               <SheetTrigger asChild>
                  <Button  size="icon" className="border-0 hover:bg-transparent" variant="ghost">
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
                              <AvatarImage src={session.user.image ?? ""} alt={session.user.name ?? "User"} />
                              <AvatarFallback>{session.user.name?.charAt(0).toUpperCase() ?? "U"}</AvatarFallback>
                           </Avatar>
                           <div>
                              <div>{session.user.name}</div>
                              <div className="text-gray-300">Boas compras!</div>
                           </div>
                         </li>
                        )}
                        <SheetClose asChild>
                           <Link href="/" className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium">
                              <HouseIcon size={16}/>
                              Início
                           </Link>
                        </SheetClose>
                        {session?.user ? (
                           // Se o usuário estiver logado, mostra o botão de sair
                           <li onClick={() => signOut()} className="border flex border-[#1A1A1A] rounded-sm py-2 px-4">
                              <button className="inline-flex items-center text-sm gap-2 font-medium">
                                 <LogOutIcon size={16} />
                                 Sair
                              </button>
                           </li>
                        ) : (
                           // Se não estiver logado, mostra o botão de login
                           <li onClick={() => signIn("google")} className="flex border border-[#1A1A1A] rounded-sm py-2 px-4 font-medium">
                              <button className="inline-flex items-center text-sm gap-2 font-medium">
                                 <LogOutIcon size={16} />
                                  Fazer Login
                              </button>
                           </li>
                        )}

                        <SheetClose asChild>
                           <Link href="/" className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium">
                              <PercentIcon size={16}/>
                                Ofertas
                           </Link>
                        </SheetClose>
                        <SheetClose asChild>
                           <Link href="/catalog" className="inline-flex items-center border border-[#1A1A1A] rounded-sm py-2 px-4 text-sm gap-2 font-medium">
                              <ListOrderedIcon size={16}/>
                                Catalog
                           </Link>
                        </SheetClose>
                     </ul>
                  </nav>
               </SheetContent>
            </Sheet>
            <Link href="/" className="text-lg font-medium">
               <span className="font-bold bg-gradient-to-r from-[#5033C3] to-[#8162FF] bg-clip-text text-transparent"> HS </span>
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
                     <div className='flex flex-col h-full'>
                        <Badge className='w-fit border border-primary rounded-full py-1 pb-1' variant="outline">
                           <ShoppingCartIcon className="h-4 w-4 mr-2 fill-white" />
                           <span className='font-bold text-base'>CARRINHO</span>
                        </Badge>
                       
                        <ScrollArea className="flex-1 h-[300px] w-full rounded-md border">
                           {products.map(product => (
                              <CartItem product = {product} key={product.id}/>
                           ))}
                        </ScrollArea>
                       
                        {/* Total e Botão de Finalizar Compra */}
                        <div className='mt-11'>
                           <div>
                              <div>
                                 <Separator className='bg-accent' />
                                 <div className='flex justify-between'>
                                    <span className='text-xs pt-2 pb-2'>Subtotal</span>
                                    <span className='text-xs pt-2 pb-2'>{subtotal.toFixed(2)}</span>
                                 </div>
                                 <Separator className='bg-accent' />
                                 <div className='flex justify-between'>
                                    <span className='text-xs pt-2 pb-2'>Entrega</span>
                                    <span className='text-xs pt-2 pb-2'>GRÁTIS</span>
                                 </div>
                                 <Separator className='bg-accent' />
                                 <div className='flex justify-between'>
                                    <span className='text-xs pt-2 pb-2'>Desconto</span>
                                    <span className='text-xs pt-2 pb-2'>-R$ {totalDiscount.toFixed(2)}</span>
                                 </div>
                                 <Separator className='bg-accent' />
                                  <div className='flex justify-between font-bold'>
                                    <span className='text-xs pt-2 pb-2'>Total</span>
                                    <span className=' text-xs pt-2 pb-2'>R$ {total.toFixed(2)}</span>
                                 </div>
                              </div>
                              
                           </div>
                           <Button className="mt-4 w-full">Finalizar Compra</Button>
                        </div>
                     </div>
                  </SheetContent>
            </Sheet>
         </div>
       </header>
   )
}

export default Header;