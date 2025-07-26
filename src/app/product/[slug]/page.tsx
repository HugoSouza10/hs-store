import ProductGallery from "../components/ProductGallery";
import { Product } from "@/types/product";

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

  return (
    <ProductGallery
      images={data.imageUrls}
      alt={data.slug}
    />
  );
};

export default ProductDetail;
