import { Metadata } from "next";
import ProductDetails from "@/app/_components/product-details";
import apiServiceCall from "@/utils/api";

export const metadata: Metadata = {
  title: "Details Page",
  description: "Details Page",
};

const DetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    const detailsData = await apiServiceCall({
      url: `products/${id}`,
      method: "GET",
    });

    return (
      <div className="container mx-auto px-7">
        <ProductDetails detailsData={detailsData} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to load product details.
      </div>
    );
  }
};

export default DetailsPage;
