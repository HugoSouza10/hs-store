"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { OrderInfo } from "../info";
import { OrderItemsList } from "../items-list";
import { OrderFooter } from "../footer";

type Props = {
  order: any;
};

export function OrderCard({ order }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={order.id} className="border-none">
        <Card className="bg-black border-zinc-900 rounded-2xl">
          <CardContent className="p-5">
            <AccordionTrigger className="hover:no-underline p-0">
              <div className="text-left">
                <p className="text-sm font-bold uppercase">
                  Número do pedido
                </p>
                <p className="text-muted-foreground">#{order.id.slice(0, 6)}</p>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-6 space-y-6">
              <OrderInfo order={order} />
              <OrderItemsList items={order.items} />
              <OrderFooter order={order} />
            </AccordionContent>
          </CardContent>
        </Card>
      </AccordionItem>
    </Accordion>
  );
}