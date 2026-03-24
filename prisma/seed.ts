import { db } from "@/lib/prisma";
// Se você exportar o 'pool' ou o adaptador do seu arquivo lib, pode fechá-lo aqui também.

async function main() {
  await db.product.createMany({
    data: [
      // MOUSES
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description: "Mouse premium ergonômico.",
        basePrice: 500,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/baccd841-5118-4a43-b7d9-557effb39e03-otetkp.png",
        ],
        categorySlug: "mouses",
      },
      {
        name: "Logitech G Pro X Superlight",
        slug: "logitech-g-pro-x-superlight",
        description: "Mouse gamer ultraleve.",
        basePrice: 650,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
        ],
        categorySlug: "mouses",
      },
      {
        name: "Razer DeathAdder V2",
        slug: "razer-deathadder-v2",
        description: "Alta precisão para jogos.",
        basePrice: 400,
        discountPercentage: 0,
        imageUrls: [
          "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
        ],
        categorySlug: "mouses",
      },
      {
        name: "HyperX Pulsefire Core",
        slug: "hyperx-pulsefire-core",
        description: "Custo-benefício gamer.",
        basePrice: 200,
        discountPercentage: 15,
        imageUrls: [
          "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
        ],
        categorySlug: "mouses",
      },
      {
        name: "SteelSeries Rival 3",
        slug: "steelseries-rival-3",
        description: "Mouse leve e preciso.",
        basePrice: 180,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
        ],
        categorySlug: "mouses",
      },

      // KEYBOARDS
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description: "Teclado compacto premium.",
        basePrice: 650,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png",
        ],
        categorySlug: "keyboards",
      },
      {
        name: "Keychron K6",
        slug: "keychron-k6",
        description: "Teclado mecânico sem fio.",
        basePrice: 550,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/10b3a1b3-f3f2-4fba-a009-af9e2ccc4ed7-ausijr.png",
        ],
        categorySlug: "keyboards",
      },
      {
        name: "Redragon Kumara",
        slug: "redragon-kumara",
        description: "Teclado mecânico custo-benefício.",
        basePrice: 250,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/030c927c-3341-48b0-839d-65fa2fcb2be9-otkh7q.png",
        ],
        categorySlug: "keyboards",
      },
      {
        name: "Corsair K70 RGB",
        slug: "corsair-k70-rgb",
        description: "Alta performance gamer.",
        basePrice: 900,
        discountPercentage: 15,
        imageUrls: [
          "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
        ],
        categorySlug: "keyboards",
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description: "Teclado estiloso e compacto.",
        basePrice: 440,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/9e89c3ab-334b-4e4f-bc9a-6aa2baeeb9c3-u67teu.png",
        ],
        categorySlug: "keyboards",
      },

      // HEADPHONES
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description: "Conforto para trabalho e música.",
        basePrice: 750,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
        ],
        categorySlug: "headphones",
      },
      {
        name: "HyperX Cloud II",
        slug: "hyperx-cloud-ii",
        description: "Som imersivo gamer.",
        basePrice: 600,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
        ],
        categorySlug: "headphones",
      },
      {
        name: "Razer BlackShark V2",
        slug: "razer-blackshark-v2",
        description: "Áudio profissional.",
        basePrice: 700,
        discountPercentage: 0,
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
        ],
        categorySlug: "headphones",
      },
      {
        name: "Sony WH-1000XM4",
        slug: "sony-wh1000xm4",
        description: "Cancelamento de ruído premium.",
        basePrice: 1800,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
        ],
        categorySlug: "headphones",
      },
      {
        name: "JBL Tune 510BT",
        slug: "jbl-tune-510bt",
        description: "Fone bluetooth acessível.",
        basePrice: 300,
        discountPercentage: 20,
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
        ],
        categorySlug: "headphones",
      },

      // MOUSEPADS
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description: "Mousepad com carregamento.",
        basePrice: 950,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
        ],
        categorySlug: "mousepads",
      },
      {
        name: "SteelSeries QcK",
        slug: "steelseries-qck",
        description: "Clássico gamer.",
        basePrice: 120,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
        ],
        categorySlug: "mousepads",
      },
      {
        name: "Razer Goliathus",
        slug: "razer-goliathus",
        description: "Superfície precisa.",
        basePrice: 150,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
        ],
        categorySlug: "mousepads",
      },
      {
        name: "Corsair MM300",
        slug: "corsair-mm300",
        description: "Grande e confortável.",
        basePrice: 180,
        discountPercentage: 0,
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
        ],
        categorySlug: "mousepads",
      },
      {
        name: "HyperX Fury S",
        slug: "hyperx-fury-s",
        description: "Controle e velocidade.",
        basePrice: 140,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
        ],
        categorySlug: "mousepads",
      },

      // MONITORS
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description: "Monitor Full HD.",
        basePrice: 1500,
        discountPercentage: 15,
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
        ],
        categorySlug: "monitors",
      },
      {
        name: "LG UltraGear 24GN600",
        slug: "lg-ultragear-24gn600",
        description: "Alta taxa de atualização.",
        basePrice: 1300,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
        ],
        categorySlug: "monitors",
      },
      {
        name: "Samsung Odyssey G5",
        slug: "samsung-odyssey-g5",
        description: "Curvo e imersivo.",
        basePrice: 2000,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
        ],
        categorySlug: "monitors",
      },
      {
        name: "AOC Hero 27G2",
        slug: "aoc-hero-27g2",
        description: "Monitor gamer popular.",
        basePrice: 1400,
        discountPercentage: 12,
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
        ],
        categorySlug: "monitors",
      },
      {
        name: "BenQ GW2480",
        slug: "benq-gw2480",
        description: "Para produtividade.",
        basePrice: 1100,
        discountPercentage: 8,
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
        ],
        categorySlug: "monitors",
      },

      // SPEAKERS
      {
        name: "Logitech Z607",
        slug: "logitech-z607",
        description: "Som surround potente.",
        basePrice: 1200,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
        ],
        categorySlug: "speakers",
      },
      {
        name: "Edifier R1280DB",
        slug: "edifier-r1280db",
        description: "Som estéreo premium.",
        basePrice: 900,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
        ],
        categorySlug: "speakers",
      },
      {
        name: "JBL Flip 6",
        slug: "jbl-flip-6",
        description: "Portátil e potente.",
        basePrice: 600,
        discountPercentage: 5,
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
        ],
        categorySlug: "speakers",
      },
      {
        name: "Sony SRS-XB23",
        slug: "sony-srs-xb23",
        description: "Graves reforçados.",
        basePrice: 500,
        discountPercentage: 0,
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
        ],
        categorySlug: "speakers",
      },
      {
        name: "Creative Pebble V3",
        slug: "creative-pebble-v3",
        description: "Compacto e elegante.",
        basePrice: 300,
        discountPercentage: 10,
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
        ],
        categorySlug: "speakers",
      },
    ],
  });
}

main()
  .then(async () => {
    console.log("Seed OK");
    await db.$disconnect();
    // process.exit(0); // Força o encerramento se o pool segurar o processo aberto
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
