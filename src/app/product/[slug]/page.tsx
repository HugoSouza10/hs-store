import { QuantitySelector } from "@/components/ui/QuantitySelector";
import ProductGallery from "../components/ProductGallery";
import { Product } from "@/types/product";
import { CartProvider } from '@/context/CartContext';
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "../components/AddToCartButton";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPrice } from "../components/ProductPrice";

// Fetch no servidor (SSR)
const getProduct = async (slug: string): Promise<Product> => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`) // ou "force-cache" se quiser usar SSG);
  if (!res.ok) throw new Error("Produto não encontrado");
  return res.json();
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getProduct(params.slug);
  const product = calculateDiscountedPrice(data);
  console.log(product)

  return (
         <div>
            <ProductGallery
              images={data.imageUrls}
              alt={data.slug}
            />
            <article className="pl-5 pr-5 mt-7">
              <ProductInfo product={product}/>
              <ProductPrice product={product} />
              {/* Descrição do produto */}
              <section className="mt-7">
                <h2 className="font-bold text-sm">Descrição</h2>
                <p className="text-xs text-[#676767]">{product.description}</p>
              </section>
               {/* Botão Adicionar ao Carrinho */}
              <AddToCartButton product={product}/>
            </article>
        </div>
  );
};

export default ProductDetail;
