import { Metadata } from "next/types";
import Products from "../_components/products";
export const metadata: Metadata = {
  title: "Products-page",
  description: "Products Page",
};
const ProductPage = () => {
  return (
    <div className="container mx-auto px-7">
      <Products />
    </div>
  );
};

export default ProductPage;
