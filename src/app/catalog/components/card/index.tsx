export const CardCatalog = ({ category }: any) => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary to-[rgba(80,51, 195, 0.2)] h-[150px] w-full flex justify-center items-center rounded-tl-lg rounded-tr-lg">
        <img
          width={0}
          height={0}
          sizes="100vw"
          src={category.imageUrls}
          alt={category.name}
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>
      <div className="flex justify-center rounded-bl-lg rounded-br-lg bg-accent py-3">
        <div className="font-bold text-sm">{category.slug}</div>
      </div>
    </div>
  );
};
