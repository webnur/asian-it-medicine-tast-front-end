// components/ProductCard.jsx
import { useState } from "react";
import Image from "next/image";
import { FaCapsules } from "react-icons/fa";

const ProductCard = ({ product }: { product: any }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        className="rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <div className="mt-2">
        <span className="flex items-center text-sm">
          <FaCapsules className="mr-2" />
          Capsule
        </span>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        >
          {product.options.map((option: any) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <p className="mt-2 text-gray-600">{selectedOption}</p>
      <div className="mt-4">
        <button className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded mb-2">
          View Details
        </button>
        <button className="w-full bg-teal-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
