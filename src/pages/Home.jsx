import React from "react";
import { useSelector } from "react-redux";

import { Banner } from '@/components/Banner';
import { Features } from '@/components/Features';
import { ChooseAutoflow } from '@/components/ChooseAutoflow';
import { EverythingOnePlace } from '@/components/EverythingOnePlace';
import { Pricing } from '@/components/Pricing';
import { FAQs } from '@/components/FAQs';
import { WhatPeopleSayAboutUs } from "@/components/WhatPeopleSayAboutUs";


export const Home = () => {
  const { initData } = useSelector((state) => state.client);

  return (
    <div>
      <Banner />  
      <Features />
      <ChooseAutoflow /> 
      <EverythingOnePlace />
      <Pricing />
      <FAQs />
      <WhatPeopleSayAboutUs />
    </div>
  )
};

