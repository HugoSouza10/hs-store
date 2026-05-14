type Props = {
  order: any;
};

export function OrderInfo({ order }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div>
        <p className="font-bold uppercase text-xs">Status</p>
        <p className="font-bold text-[#8162FF] text-xs">Pago</p>
      </div>

      <div>
        <p className="font-bold uppercase text-xs">Data</p>
        <p className="text-[#A1A1A1] text-xs">{new Date(order.createdAt).toLocaleDateString("pt-BR")}</p>
      </div>

      <div>
        <p className="font-bold uppercase text-xs">Pagamento</p>
        <p className="text-[#A1A1A1] text-xs">Cartão</p>
      </div>
    </div>
  );
}