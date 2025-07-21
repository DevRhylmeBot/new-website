import axios from "axios";
import React from "react";
import { Price } from "@/types/price";
import { CheckmarkIcon } from "react-hot-toast";

const PricingBox = ({ product }: { product: Price }) => {
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post("/api/payment", {
      priceId: product.id,
    });
    window.location.href = data.url;
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-10">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2">
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
          {product.nickname}
        </h3>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          ${(product.unit_amount! / 100).toFixed(2)} / month
        </p>
        <ul className="mb-6 list-inside list-disc text-gray-600 dark:text-gray-400">
          <li className="mb-2 flex items-center gap-2">
            <CheckmarkIcon />
            Feature 1
          </li>
          <li className="mb-2 flex items-center gap-2">
            <CheckmarkIcon />
            Feature 2
          </li>
          <li className="mb-2 flex items-center gap-2">
            <CheckmarkIcon />
            Feature 3
          </li>
        </ul>
        <button
          onClick={handleSubscription}
          className="w-full rounded bg-primary px-6 py-3 text-white hover:bg-opacity-90"
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingBox;
