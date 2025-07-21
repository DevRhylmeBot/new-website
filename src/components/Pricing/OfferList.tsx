// src/app/(site)/pricing/page.tsx

import React from "react";
import Pricing from "@/components/Pricing";
import { Price } from "@/types/price";
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";

const dummyProducts: Price[] = [
  {
    id: "price_basic",
    nickname: "Basic Plan",
    unit_amount: 999,
    currency: "usd",
  },
  {
    id: "price_pro",
    nickname: "Pro Plan",
    unit_amount: 1999,
    currency: "usd",
  },
  {
    id: "price_enterprise",
    nickname: "Enterprise Plan",
    unit_amount: 4999,
    currency: "usd",
  },
];

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      <Pricing products={dummyProducts} />
      <Faq />
    </>
  );
};

export default PricingPage;
