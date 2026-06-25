import { formatCurrency } from "@/app/helpers/currency";
import Image from "next/image";

type Props = {
  item: any;
};

export function OrderItemCard({ item }: Props) {
  return (
    <div className="flex gap-4">
      <div className="relative h-20 w-20 rounded-xl bg-accent">
        <Image
          src={item.product.imageUrls[0]}
          alt={item.product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1 space-y-2">
        <span className="inline-block rounded-sm bg-accent px-3 py-1 text-[10px]">
          Vendido e entregue por: <span className="font-semibold">FSW Store</span>
        </span>

        <p className="text-sm">{item.product.name}</p>

        <div className="flex items-center justify-between">
          <strong className="text-xs">
            {(formatCurrency(Number(item.price)))}
          </strong>

          <span className="text-[#A1A1A1] text-xs">
            Qtd: {item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}