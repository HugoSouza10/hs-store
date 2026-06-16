"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardContent } from "@/components/ui/card";
import { OrderInfo } from "../info";
import { OrderItemsList } from "../items-list";
import { OrderFooter } from "../footer";
import { OrderCardProps } from "@/types/OrderCard";

type Props = {
  order: OrderCardProps;
};

export function OrderCard({ order }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={order.id} className="border-b-0 border-2  border-[#1A1A1A] mr-4 ml-4 rounded-2xl mb-5">
        <CardContent className="p-5">
          <AccordionTrigger className="hover:no-underline p-0">
            <div className="text-left">
              <p className="text-sm font-bold uppercase">Número do pedido</p>
              <p className="text-[#A1A1A1]">#{order.id.slice(0, 6)}</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="pt-5 space-y-5">
            <OrderInfo order={order} />
            <OrderItemsList items={order.items} />
            <OrderFooter order={order} />
          </AccordionContent>
        </CardContent>
      </AccordionItem>
    </Accordion>
  );
}
