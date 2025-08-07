import { QuantitySelector } from "@/components/ui/QuantitySelector";
import ProductGallery from "../components/ProductGallery";
import { Product } from "@/types/product";
import { CartProvider } from '@/context/CartContext';
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import { Badge } from "@/components/ui/badge";

// Fetch no servidor (SSR)
const getProduct = async (slug: string): Promise<Product> => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store", // ou "force-cache" se quiser usar SSG
  });
  if (!res.ok) throw new Error("Produto não encontrado");
  return res.json();
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getProduct(params.slug);
  const product = calculateDiscountedPrice(data);

  console.log(product);

  //A gente precisa calcular o preço com desconto
  // A gente precisa refatorar as informações do getProduct para incluir informações importantes
  return (
    <CartProvider>
         <div>
          <ProductGallery
            images={data.imageUrls}
            alt={data.slug}
          />
          <article className="pl-5 pr-5 mt-7">
            <span className="text-[#A1A1A1] text-xs"> Novo  |  100 vendidos </span>
            <h1 className="text-lg">{product.slug}</h1>
            <p className="text-[#8162FF]">Disponível em estoque </p>
            <div className="mt-4">
                <div>
                  <div className="flex">
                     <div className="font-bold">R$: {product.productWithDiscount}</div>
                     <Badge className="rounded-full ml-2">
                        {product.discountPercentage}%
                     </Badge> 
                  </div>
                  
                  <div className="text-xs line-through text-[#676767]">R$: {product.basePrice}</div>
                </div>
            </div>
          </article>
        </div>
    </CartProvider>
   
  );
};

export default ProductDetail;
