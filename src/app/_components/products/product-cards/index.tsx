import Link from "next/link";
import { ProductType } from "../../../../../types";
import Image from "next/image";
const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="h-[350px] rounded-[10px] shadow-md drop-shadow-md shadow-[#00000040] p-3 overflow-hidden">
      <div className="h-[160px] relative bg-[#000000d4] py-1">
        <Image
          src={product?.images?.[0]}
          alt="product-image"
          width={100}
          height={150}
          className="object-contain h-[150px] w-full"
        />
      </div>
      <div className="p-3">
        <p
          className="font-semibold text-[20px] text-[#285F9D] line-clamp-1"
          title={product?.title}
        >
          {product?.title}
        </p>
        <p
          className="text-[#7F7F7F] text-[16px] mt-3 line-clamp-2"
          title={product?.description}
        >
          {product?.description}
        </p>
      </div>
      <div className="flex justify-between items-center px-3 mt-3 w-full">
        <p className="font-semibold text-[16px] text-[#285F9D]">
          <span className="text-black mx-1 font-semibold ">Price:</span>
          {product?.price}$
        </p>
        <Link href={`/products/${product?.id}`}>
          <button className="cursor-pointer rounded-md h-[40px] w-[85px] bg-[#285F9D] text-white text-[16px]">
            More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
