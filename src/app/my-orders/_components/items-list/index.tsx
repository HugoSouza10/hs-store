import { ScrollArea } from "@/components/ui/scroll-area";
import { OrderItemCard } from "../item-card";

type Props = {
  items: any[];
};

export function OrderItemsList({ items }: Props) {
  return (
    <ScrollArea className="max-h-[320px] pr-4">
      <div className="space-y-4">
        {items.map((item) => (
          <OrderItemCard key={item.id} item={item} />
        ))}
      </div>
    </ScrollArea>
  );
}