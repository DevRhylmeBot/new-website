// src/components/Pricing/index.tsx

import React from "react";
import PricingBox from "./PricingBox";
import { Price } from "@/types/price";

interface PricingProps {
  products: Price[];
}

const Pricing = ({ products }: PricingProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {products.map((product) => (
        <PricingBox key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Pricing;
