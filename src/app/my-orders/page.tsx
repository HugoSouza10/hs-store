import { Grid2X2X, ShoppingBasket } from "lucide-react";
import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { OrderCard } from "./_components/card";

// Componente de categoria no lado do servidor
export default async function MyOrders() {
  // Função para buscar os meus pedidos no servidor
  const session = await auth();
  if (!session?.user?.id) {
    return <p>Faça login para ver seus pedidos.</p>;
  }
  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  }); // Busca os pedidos diretamente no servidor
  console.log(orders[0].items);
  return (
    <>
      <div className="flex justify-center items-center border border-primary uppercase p-3 rounded-full w-fit text-xs font-bold m-4">
        <div className="pr-2">
          <Grid2X2X size={16} />
        </div>
        MEUS PEDIDOS
      </div>
      <div>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </>
  );
}
