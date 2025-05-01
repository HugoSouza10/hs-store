import Image, { StaticImageData } from 'next/image';

// Definindo as props do componente
interface BannerProps {
  imageUrl: StaticImageData; // URL da imagem
  altText?: string; // Texto alternativo para a imagem (opcional)
  width?: number; // Largura da imagem (opcional)
  height?: number; // Altura da imagem (opcional)
}

export default function Banner({
  imageUrl,
  altText = "Banner Image",
}: BannerProps) {
  return (
    <>
      <div className="w-full max-w-[1024px] mx-auto"> {/* Contêiner responsivo */}
          <Image
          src={imageUrl}
          alt={altText}
          className="w-full h-auto object-cover" // Imagem responsiva
          />
      </div>
    </>
   
  );
}