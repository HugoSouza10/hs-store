
import { SectionTitle } from "@/components/ui/section-title";
import Banner from "./components/banners";
import Categories from "./components/categories";
import banner1 from './img/banner-home-1.png';
import banner2 from './img/banner-home-2.png';
import banner3 from './img/banner-home-3.png';
import { ProductList } from "@/components/ui/product-list";

// Função para buscar todos os produtos na qual discount é diferente de 0
async function fetchDeals() {
  const response = await fetch('http://localhost:3000/api/product');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  const data = await response.json();
  // Filtra os produtos com desconto
  return data.filter((product: {discountPercentage: number}) => product.discountPercentage > 0)
}

//Função para filtrar todos teclados
async function fetchKeyboard() {
  const response = await fetch('http://localhost:3000/api/product');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  const data = await response.json();
  // Filtra os produtos da categoria "keyboards" e com desconto
   // Filtra os produtos da categoria "keyboards"
   return data.filter((product: {slug: string}) => product.slug === "keyboards");
}

//Função para filtrar todos Mouses
async function fetchMouse() {
  const response = await fetch('http://localhost:3000/api/product');
  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }
  const data = await response.json();
  // Filtra os produtos da categoria "keyboards" e com desconto
   // Filtra os produtos da categoria "keyboards"
   return data.filter((product: {slug: string}) => product.slug === "mouses");
}

export default async function Home() {
  const deals = await fetchDeals(); // Busca os dados no servidor
  const keyboard = await fetchKeyboard();
  const mouses = await fetchMouse();
  return (
    <main className="pl-4 pr-4">
      <div className="banner-home-1">
        <Banner
          imageUrl={banner1}
          altText="Até 55% de desconto!"
        />
      </div>
      <div className="categories">
        <Categories/>
      </div>
      <SectionTitle>Ofertas</SectionTitle>
      <ProductList products={deals}/>
      <Banner
          imageUrl={banner2}
          altText="Até 55% de desconto!"
        />
      <SectionTitle>Teclados</SectionTitle>
      <ProductList products={keyboard}/>
      <Banner
          imageUrl={banner3}
          altText="Até 20% de desconto!"
        />
      <SectionTitle>Mouses</SectionTitle>
      <ProductList products={mouses}/>
    </main>
    
  )
}