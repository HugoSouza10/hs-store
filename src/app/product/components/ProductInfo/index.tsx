import type { ProductModel } from "@/generated/prisma/models";

export const ProductInfo = (product : ProductModel) => {
  return (
    <>
        <span className="text-[#A1A1A1] text-xs"> Novo  |  100 vendidos </span>
        <h1 className="text-lg">{product.slug}</h1>
        <p className="text-[#8162FF]">Disponível em estoque </p>
    </>
  );
};
