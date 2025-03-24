'use client'
import React from 'react';
import CarouselImage from '@/components/carousel/carousel';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App: React.FC = () => (
  <>
  <CarouselImage/>
  </>
);

export default App;