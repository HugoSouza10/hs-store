type Props = {
  order: any;
};

export function OrderFooter({ order }: Props) {
  return (
    <div className="border-t border-zinc-900 pt-4 space-y-3 text-sm">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>R$ {Number(order.subtotal).toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <span>Entrega</span>
        <span>GRÁTIS</span>
      </div>

      <div className="flex justify-between">
        <span>Descontos</span>
        <span>- R$ {Number(order.discount).toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span>R$ {Number(order.total).toFixed(2)}</span>
      </div>
    </div>
  );
}