"use client";

import React, { useState } from 'react';
import Categories from './components/Categories';
import { DirectionProvider } from "@radix-ui/react-direction"
import { SliderWithCollision } from '@/components/ui/SliderWithCollision';
import CustomBreadCrumb from './components/CustomBreadcrumb';
import Comments from './components/Comments';
import ProductCard from './components/ProductCard';
import LatestProductsSection from './components/LatestProductsSection';
import MostSalesSection from './components/MostSalesSections';
import HeroSection from './components/HeroSection';
import BannerSection from './components/BannerSection';




export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <MostSalesSection />
      <LatestProductsSection />
      <BannerSection />
      <Comments />
    </>
  )
};


