"use client";
// pages/index.jsx
import { useState } from "react";
import Sidebar from "../sidebar/siderbar";
import ProductGrid from "./ProductGrid";
// import ProductGrid from '../components/ProductGrid';
// import Sidebar from '../components/Sidebar';
import image from "../../../public/images/sergel.jpg";
import { useProductsQuery } from "@/redux/api/productApi";
import { useDebounced } from "@/redux/hooks";

const products = [
  {
    id: 1,
    name: "Sergel 20",
    description: "Esomeprazole Magnesium Trihydrate",
    price: "64.40",
    image: image,
    options: ["20 gm", "40 gm", "500 gm", "650 gm", "1000 gm"],
  },
  {
    id: 2,
    name: "Sergel 20",
    description: "Esomeprazole Magnesium Trihydrate",
    price: "64.40",
    image: image,
    options: ["20 gm", "40 gm", "500 gm", "650 gm", "1000 gm"],
  },
  {
    id: 3,
    name: "Sergel 20",
    description: "Esomeprazole Magnesium Trihydrate",
    price: "64.40",
    image: image,
    options: ["20 gm", "40 gm", "500 gm", "650 gm", "1000 gm"],
  },
  {
    id: 4,
    name: "Sergel 20",
    description: "Esomeprazole Magnesium Trihydrate",
    price: "64.40",
    image: image,
    options: ["20 gm", "40 gm", "500 gm", "650 gm", "1000 gm"],
  },
  {
    id: 5,
    name: "Sergel 201",
    description: "Esomeprazole Magnesium Trihydrate",
    price: "64.40",
    image: image,
    options: ["20 gm", "40 gm", "500 gm", "650 gm", "1000 gm"],
  },
  // Add more products as needed
];

const ProductContainer = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useProductsQuery({ ...query });

  const productData = data?.products;
  const meta = data?.meta;

  console.log(productData);

  return (
    <div className="flex">
      {sidebarVisible && <Sidebar />}
      <div>
        <button
          onClick={() => setSidebarVisible(!sidebarVisible)}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Toggle Sidebar
        </button>
        <ProductGrid products={products} sidebarVisible={sidebarVisible} />
      </div>
    </div>
  );
};

export default ProductContainer;
