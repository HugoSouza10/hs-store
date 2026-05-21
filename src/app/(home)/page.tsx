import { SectionTitle } from "@/components/ui/section-title";
import Banner from "./components/banners";
import Categories from "./components/categories";
import banner1 from "./img/banner-home-1.png";
import banner2 from "./img/banner-home-2.png";
import banner3 from "./img/banner-home-3.png";
import { ProductList } from "@/components/ui/product-list";
import { getHomeProducts } from "@/app/_data_access/product/get-home";

export default async function Home() {
  //Pegando todos produtos que tem descontos
  const { deals, keyboards, mouses } = await getHomeProducts();

  return (
    <main className="pl-4 pr-4">
      <div className="banner-home-1">
        <Banner imageUrl={banner1} altText="Até 55% de desconto!" />
      </div>
      <div className="categories">
        <Categories />
      </div>
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals} />
      <Banner imageUrl={banner2} altText="Até 55% de desconto!" />
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keyboards} />
      <Banner imageUrl={banner3} altText="Até 20% de desconto!" />
      <SectionTitle>Mouses</SectionTitle>
      <ProductList products={mouses} />
    </main>
  );
}