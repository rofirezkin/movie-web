"use client";

import { useState } from "react";
import { useMovieStore } from "@/store/useMovieStore";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // ✅ Heroicon

export default function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { setSearchResults } = useMovieStore();

  const handleSearch = () => {
    setSearchResults(searchKeyword);
  };

  return (
    <div className="flex gap-3 items-center my-6">
      <input
        type="text"
        value={searchKeyword}
        placeholder="Search movies..."
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 flex-1 text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-red-600 p-2 rounded hover:bg-red-700 flex items-center justify-center"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
