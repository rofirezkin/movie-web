'use client';

import { useMovieStore } from '@/store/useMovieStore';
import { useEffect, useState } from 'react';

const typeMovies = ['movie', 'series', 'episode'];
const years = Array.from({ length: 50 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
);

export default function FilterBar() {
  const {
    selectedType,
    selectedYear,
    setSelectedType,
    setSelectedYear,
  } = useMovieStore();


  const handleReset = () => {
    setSelectedType('');
    setSelectedYear('');
    setSelectedType(null);
    setSelectedYear(null);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6 mt-4">
 
      <select
        value={selectedYear|| ''}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>


      <select
        value={selectedType||''}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Type</option>
        {typeMovies.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <button
        onClick={handleReset}
        className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-50"
      >
        Reset
      </button>
    </div>
  );
}
