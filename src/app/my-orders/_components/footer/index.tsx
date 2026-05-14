type Props = {
  order: any;
};

export function OrderFooter({ order }: Props) {
  return (
    <div className="border-t border-zinc-900 pt-4 space-y-3 text-xs">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>R$ {Number(order.subtotal).toFixed(2)}</span>
      </div>
      <div className="flex justify-between border border-b-2 pt-2 pb-2">
        <span>Entrega</span>
        <span>GRÁTIS</span>
      </div>

      <div className="flex justify-between border border-b-2 pt-2 pb-2">
        <span>Descontos</span>
        <span>- R$ {Number(order.discount).toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-xs font-bold">
        <span>Total</span>
        <span>R$ {Number(order.total).toFixed(2)}</span>
      </div>
    </div>
  );
}