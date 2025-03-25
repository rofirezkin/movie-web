"use client";
import React from "react";

import dynamic from "next/dynamic";
import MasonryList from "@/components/masonry/masonry";

const CarouselImage = dynamic(() => import("@/components/carousel/carousel"), {
  ssr: false,
});

const App: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto my-6">
    <CarouselImage />
    
    <MasonryList />
  </div>
);

export default App;
