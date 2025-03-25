"use client";

import { useGetMoviesInfinite } from "@/services/query/query.get-movies";
import { useMovieStore } from "@/store/useMovieStore";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function MasonryList() {
  const { selectedType, selectedYear, searchResults } = useMovieStore(
    (state) => state
  );
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    error,
    isError,
    fetchNextPage,
  } = useGetMoviesInfinite({
    search: searchResults || "movie",
    year: selectedYear,
    type: selectedType,
    page: 1,
  });
  const router = useRouter();

  if (isLoading) {
    return (
      <p className="text-center mt-2 text-sm text-gray-500">Loading....</p>
    );
  }

  console.log("ddd", data);

  const items =
    data?.dataMap.map((item, index) => (
      <div
        onClick={() => router.push(`/detail/${item.id}`)}
        key={item.id || index}
        className="rounded overflow-hidden shadow-md bg-white p-2"
      >
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={300}
          className="rounded object-cover w-full h-auto"
        />
        <h3 className="mt-2 text-sm text-white font-semibold">{item.title}</h3>
        <p className="text-xs text-white">
          {item.subTitle} - {item.year}
        </p>
      </div>
    )) ?? [];

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  if (isError) {
    return (
      <>
        <p>Terjadi kesalahan server</p>
        <p>{error.message}</p>;
      </>
    );
  }
  return (
    <div className="mt-4">
      {items.length === 0 && (
        <p className="text-center mt-2 text-sm text-gray-500">data notfound</p>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
      {hasNextPage && !isFetching && (
        <div className="text-center mt-4">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}

      {isFetchingNextPage && (
        <p className="text-center mt-2 text-sm text-gray-500">
          Loading more...
        </p>
      )}
    </div>
  );
}
