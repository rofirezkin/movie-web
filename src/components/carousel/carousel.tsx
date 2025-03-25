"use client";

import React, { useMemo } from "react";
import { Carousel } from "antd";
import { CarouselItem, useGetMovie } from "@/services/query/query.get-movies";
import Image from "next/image";

const CarouselImage = () => {
  const { data, isLoading } = useGetMovie({
    params: { search: "comedy" },
  });

  const carouselData: CarouselItem[] = useMemo(() => {
    return (
      data?.data.Search?.map((res, index) => ({
        id: String(index),
        image: res.Poster,
        subTitle: res.Type,
        title: res.Title,
        year: res.Year,
      })) ?? []
    );
  }, [data]);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <Carousel autoplay autoplaySpeed={4000} dots>
        {carouselData.map((res) => (
          <div
            key={res.id}
            className="flex justify-center items-center bg-gray-600 rounded-xl shadow-md p-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-[200px] h-[300px] relative">
                <Image
                  src={res.image}
                  alt={res.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold text-white">
                  {res.title}
                </h2>
                <p className="text-gray-500 italic text-white">
                  {res.year} — {res.subTitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselImage;
