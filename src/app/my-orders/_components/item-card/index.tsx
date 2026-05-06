import Image from "next/image";

type Props = {
  item: any;
};

export function OrderItemCard({ item }: Props) {
  return (
    <div className="flex gap-4">
      <div className="relative h-20 w-20 rounded-xl bg-zinc-900">
        <Image
          src={item.product.imageUrls[0]}
          alt={item.product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1 space-y-2">
        <span className="inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs">
          Vendido e entregue por: FSW Store
        </span>

        <p>{item.product.name}</p>

        <div className="flex items-center justify-between">
          <strong className="text-lg">
            R$ {Number(item.price).toFixed(2)}
          </strong>

          <span className="text-sm text-muted-foreground">
            Qtd: {item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}