import { ProductType } from "../../../../types";
import Image from "next/image";
import { StarIcon } from "../icons";

interface ProductDetailsProps {
  detailsData: ProductType;
}

// Reusable component for product details
const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => {
  if (!value) return null;
  return (
    <p className="font-semibold text-[16px] text-[#285F9D]">
      <span className="text-black mx-1 font-semibold">{label}:</span>
      {value}
    </p>
  );
};
const RatingItem = ({ label, value }: { label: string; value?: number }) => {
  if (!value) return null;
  return (
    <div className="font-semibold text-[16px] text-[#285F9D] flex gap-1 items-center">
      <span className="text-black mx-1 font-semibold">{label}:</span>
      <div className="flex gap-1">
        {value &&
          Array.from({ length: value }, (_, index) => (
            <StarIcon
              key={index}
              height={15}
              width={15}
              className="text-[#E5C72B]"
            />
          ))}
      </div>
    </div>
  );
};
const ProductDetails: React.FC<ProductDetailsProps> = ({ detailsData }) => {
  if (!detailsData)
    return (
      <p className="text-center text-red-500">Product details not available.</p>
    );

  return (
    <div className="w-full p-0 lg:px-[300px] mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#285F9D] font-semibold text-[30px] mx-auto">
          {detailsData.title}
        </h1>

        {detailsData.images?.[0] && (
          <Image
            src={detailsData.images[0]}
            alt="product-image"
            width={470}
            height={250}
            priority
            className="mt-4"
          />
        )}

        <div className="mt-5 grid grid-cols-2 gap-3">
          <DetailItem label="Price" value={`${detailsData.price}$`} />
          <DetailItem
            label="Discount Percentage"
            value={`${detailsData.discountPercentage}%`}
          />
          <RatingItem label="Rating" value={detailsData.rating} />
          <DetailItem label="Stock" value={detailsData.stock} />
          <DetailItem label="Brand" value={detailsData.brand} />
          <DetailItem label="Category" value={detailsData.category} />
        </div>
      </div>
      <p className=" text-black text-[18px] my-5">Discription</p>
      <p className="text-[#7F7F7F] text-[16px]">{detailsData.description}</p>
      <div className="mt-5 grid grid-cols-4 gap-5">
        {detailsData.images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="product-image"
            width={100}
            height={150}
            className="object-contain h-[150px] w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
