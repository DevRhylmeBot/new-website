// src/app/(site)/pricing/page.tsx

import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Pricing Page" />
      {/* <Pricing /> removed to avoid prop error */}
      <Faq />
    </>
  );
};

export default PricingPage;
