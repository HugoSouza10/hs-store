import { NextResponse } from "next/server";

// Listagem de produtos
export const products = [
  // Mouses
  {
    id: "1",
    name: "Logitech MX Master 3s",
    slug: "Logitech MX Master 3s",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    basePrice: 500,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/baccd841-5118-4a43-b7d9-557effb39e03-otetkp.png",
      // outras imagens, se houver
    ],
    categorySlug: "mouses", // Usando o slug da categoria aqui
  },
  {
    id: "2",
    name: "Logitech Pro X Superlight",
    slug: "Logitech Pro X Superlight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 500,
    discountPercentage: 0,
    imageUrls: [
      "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
      "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
      "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
      "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
    ],
    categorySlug: "mouses",
  },
  {
    id: "3",
    name: "Logitech G305 Lightspeed",
    slug: "Logitech G305 Lightspeed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 500,
    discountPercentage: 0,
    imageUrls: [
      "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
      "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
      "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
      "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
    ],
    categorySlug: "mouses",
  },
  // ... outros mouses

  // Teclados
  {
    id: "4",
    name: "Logitech MX Keys Mini",
    slug: "Logitech MX Keys Mini",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 650,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png",
      "https://utfs.io/f/10b3a1b3-f3f2-4fba-a009-af9e2ccc4ed7-ausijr.png",
      "https://utfs.io/f/030c927c-3341-48b0-839d-65fa2fcb2be9-otkh7q.png",
      "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
    ],
    categorySlug: "keyboards", // Usando o slug da categoria aqui
  },

  {
    id: "5",
    name: "Logitech MX Keys S",
    slug: "Logitech MX Keys S",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 750,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/834b0e30-45bc-47dd-b2c1-bfe65ef62eb2-m9yl8y.png",
      "https://utfs.io/f/e651e1be-734a-4847-976e-b54979290830-du02k1.png",
      "https://utfs.io/f/2c3788e1-8a8c-4672-af73-d2d3d5878d16-5e1jv4.png",
      "https://utfs.io/f/90822af7-89cf-4f82-9f8d-cede02239072-31wytt.png",
    ],
    categorySlug: "keyboards",
  },

  {
    id: "6",
    name: "Logitech Pop Keys",
    slug: "Logitech Pop Keys",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 440,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/9e89c3ab-334b-4e4f-bc9a-6aa2baeeb9c3-u67teu.png",
      "https://utfs.io/f/46081918-deac-4a8b-a082-caba99ff7b57-58nqzp.png",
      "https://utfs.io/f/ce638b00-b423-476c-a631-2a5977aa9816-jowbfg.png",
      "https://utfs.io/f/f7af860a-64d3-4221-acde-51ad510b898b-qeno4j.png",
    ],
    categorySlug: "keyboards",
  },

  // ... outros teclados

  // Fones
  {
    id: "7",
    name: "Logitech Zone Vibe 100",
    slug: "Logitech Zone Vibe 100",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 750,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
      // outras imagens
    ],
    categorySlug: "headphones",
  },
  // ... outros fones

  // Mousepads
  {
    id: "8",
    name: "Logitech Powerplay",
    slug: "Logitech Powerplay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 950,
    discountPercentage: 10,
    imageUrls: [
      "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
      // outras imagens
    ],
    categorySlug: "mousepads",
  },
  // ... outros mousepads

  // Monitores
  {
    id: "9",
    name: "Dell S2421HN",
    slug: "Dell S2421HN",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 1500,
    discountPercentage: 15,
    imageUrls: [
      "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
      // outras imagens
    ],
    categorySlug: "monitors",
  },
  // ... outros monitores

  // Speakers
  {
    id: "10",
    name: "Logitech Surround Sound Z607",
    slug: "Logitech Surround Sound Z607",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    basePrice: 1200,
    discountPercentage: 5,
    imageUrls: [
      "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
      // outras imagens
    ],
    categorySlug: "speakers",
  },
  // ... outros speakers
];

export function GET() {
  // Verifique se a resposta está correta ao ser retornada para o cliente
  return NextResponse.json(products);
}
