
import ProductGallery from "../components/ProductGallery";
import { Product } from "@/types/product";
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import { AddToCartButton } from "../components/AddToCartButton";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPrice } from "../components/ProductPrice";
import { ShippingInfo } from "../components/ShippingInfo";
import { SectionTitle } from "@/components/ui/section-title";
import { ProductList } from "@/components/ui/product-list";

// Fetch no servidor (SSR)
const getProduct = async (slug: string): Promise<Product> => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`) // ou "force-cache" se quiser usar SSG);
  if (!res.ok) throw new Error("Produto não encontrado");
  return res.json();
};

async function fetchRelated() {
  const response = await fetch('http://localhost:3000/api/product');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  const data = await response.json();
  // Filtra os produtos com desconto
  return data.filter((product: {discountPercentage: number}) => product.discountPercentage > 0)
}

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getProduct(params.slug);
  const product = calculateDiscountedPrice(data);
  const relatedProducts = await fetchRelated();
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
              <ShippingInfo/>
              <SectionTitle className="mt-14 font-bold text-base">PRODUTOS RECOMENDADOS</SectionTitle>
              <ProductList products={relatedProducts}/>
            </article>
        </div>
  );
};

export default ProductDetail;
