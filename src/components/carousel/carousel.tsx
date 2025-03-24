'use client'
import React, { useMemo } from 'react';
import { Carousel } from 'antd';
import { CarouselItem, useGetMovie } from '@/services/query/query.get-movies';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselImage = () => {

  const {data, isError, error, isLoading} = useGetMovie({
    params: {search: 'comedy'},
  });

  const carouselData = useMemo(() => {
    const dataMap = data?.data.Search.map((res, index) => {
      const dataMapping: CarouselItem = {
        id: String(index),
        image: res.Poster,
        subTitle: res.Type,
        title: res.Title,
        year: res.Year,
      };
      return dataMapping;
    });
    return dataMap ?? [];
  }, [data]);


  return (

  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
    {carouselData.map(res=> {
      return (
        <div>
          test
        <h3 style={contentStyle}>{res.title}</h3>
      </div>
      )
    })}
  </Carousel>
  )
};

export default CarouselImage;