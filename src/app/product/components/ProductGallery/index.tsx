'use client';
import Image from "next/image";
import { useState } from "react";
type ProductGalleryProps  = {
    images: string[],
    alt: string
}

const ProductGallery =  ({ images, alt }: ProductGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
       <div className="relative bg-accent w-full aspect-[4/3]">
            {Array.isArray(images) && images.length > 0 ? (
                <Image
                src={images[currentIndex]}
                alt={alt}
                fill
                className="object-contain"
                />
            ) : (
              <div className="text-muted-foreground">Carregando imagem...</div>
            )}
        </div>
        <div className="grid grid-cols-4 gap-3 pl-5 pr-5 mt-7">
            {images.map((img, index) => (
                <button 
                    onClick={() => setCurrentIndex(index)}
                    className= {`relative w-full aspect-square rounded-xl bg-accent transition-all 
                    ${index === currentIndex ? 'border-2 border-primary': ''}`
                }>
                    <Image
                        src={img}
                        alt={`${alt} ${index}`}
                        className="object-contain"
                        fill
                    />
                </button>
            ))}
        </div>
    </>
    
  )
}
export default ProductGallery;