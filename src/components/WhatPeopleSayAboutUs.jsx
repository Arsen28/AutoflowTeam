import { SectionTitle } from "@/components/SectionTitle";
import { ReviewsSlider } from "@/components/ReviewsSlider";

export const WhatPeopleSayAboutUs = () => {

  return (
    <div className="lg:px-22 mt-3 mb-[65px] lg:flex">
      <div className="mt-[64px] lg:mt-[160px]">
        <SectionTitle text="// what people say about us" />
        <p className="mt-[18px] lg:mt-4 text-[48px] lg:text-6xl font-medium leading-none -tracking-[1.92px] lg:-tracking-2.4">Customer reviews</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <ReviewsSlider />
      </div>
    </div>
  )
};

