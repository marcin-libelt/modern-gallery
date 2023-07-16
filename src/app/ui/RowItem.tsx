import Image from "next/image";

interface RowItemProps {
  id?: string;
  urls: object;
  alt_description: string;
}

const RowItem: React.FC<RowItemProps> = ({ id, urls, alt_description }) => {
  return (
    <div key={id} className={`aspect-square relative`}>
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
