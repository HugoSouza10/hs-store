type Props = {
  order: any;
};

export function OrderInfo({ order }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div>
        <p className="font-bold uppercase">Status</p>
        <p className="text-primary">Pago</p>
      </div>

      <div>
        <p className="font-bold uppercase">Data</p>
        <p>{new Date(order.createdAt).toLocaleDateString("pt-BR")}</p>
      </div>

      <div>
        <p className="font-bold uppercase">Pagamento</p>
        <p>Cartão</p>
      </div>
    </div>
  );
}