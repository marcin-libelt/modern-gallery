import Image from "next/image";

interface RowItemProps {
  id?: string;
  width: number;
  height: number;
  urls: object;
  alt_description: string;
}

const RowItem: React.FC<RowItemProps> = ({
  id,
  width,
  height,
  urls,
  alt_description,
}) => {
  return (
    <div key={id} className={`aspect-square relative h-[${height}px]`}>
      <Image
        src={urls.small}
        sizes="33vw"
        fill={true}
        alt={alt_description ? alt_description : ""}
        className={`max-w-full h-auto hover:opacity-60
               
              transition-opacity`}
      />
    </div>
  );
};

export default RowItem;
