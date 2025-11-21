
import ProductGallery from "../components/ProductGallery";
import { Product } from "@/types/product";
import { getProduct, getProductRelated} from '@/app/_data_access/productData';
import { calculateDiscountedPrice } from "@/app/helpers/calculatePricing";
import { AddToCartButton } from "../components/AddToCartButton";
import { ProductInfo } from "../components/ProductInfo";
import { ProductPrice } from "../components/ProductPrice";
import { ShippingInfo } from "../components/ShippingInfo";
import { SectionTitle } from "@/components/ui/section-title";
import { ProductList } from "@/components/ui/product-list";

// Fetch no servidor (SSR)
const ProductDetail = async ({ params }: { params: { slug: string } }) => {
  const data = await getProduct(params.slug);
  const product = calculateDiscountedPrice(data);
  const relatedProducts = await getProductRelated();
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
                <p className="text-xs text-[#676767] mt-2">{product.description}</p>
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
