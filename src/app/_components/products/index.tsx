"use client";
import { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import ProductCard from "./product-cards";
import SearchInput from "./search-input";
import apiServiceCall from "@/utils/api";
import debounce from "lodash.debounce";
import { EmptyIcon, LoaingIcon } from "../icons";
import { ProductType } from "../../../../types";
const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const debouncedSetSearch = useCallback(
    debounce((value: string) => setDebouncedSearch(value), 500),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchValue);
  }, [searchValue, debouncedSetSearch]);

  const swrKey = debouncedSearch
    ? `products/search?q=${debouncedSearch}`
    : null;

  const fetcher = (url: string) => apiServiceCall({ url, method: "GET" });

  const { data, error, isLoading } = useSWR(swrKey, fetcher);
  return (
    <div className="w-full lg:w-3/4 mx-auto mt-5">
      <div className="px-0 sm:px-20 md:px-[113px]">
        <SearchInput searchValue={searchValue} searchChange={setSearchValue} />
        <p className="mt-2 text-[18px]">{`Total Result Count: ${
          data?.products?.length || 0
        }`}</p>
      </div>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center min-h-96">
          <LoaingIcon height={60} width={60} className="text-[#285F9D]" />
        </div>
      )}
      {error && <p>Error loading products.</p>}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
          {data?.products?.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {data && data?.products?.length === 0 && (
        <div className="w-full h-full flex flex-col gap-5 items-center min-h-96 mt-24">
          {" "}
          <div className="rounded-full bg-[#EDEFF0] p-5 h-[150px] w-[150px] flex justify-center items-center">
            <EmptyIcon height={70} width={70} className="text-[#909A9F]" />
          </div>
          <p className="text-[16px] text-[#909A9F] mt-5 text-center">
            No results for your search!
            <br /> Try another keyword
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
