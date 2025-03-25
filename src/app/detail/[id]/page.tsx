'use client';

import GenreChart from "@/components/chart/genre-chart";
import RatingSourceChart from "@/components/chart/rating-chart";
import { useGetMovieDetaill } from "@/services/query/query.get-movie-detail";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function MovieDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading } = useGetMovieDetaill({ params: { id } });

  if (isLoading) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-red-500 mt-10">No data found.</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">{data.Title}</h1>

      {/* Movie info layout */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* Poster */}
        <div className="flex-shrink-0">
          <Image
            priority
            src={
              data.Poster && data.Poster !== "N/A"
                ? data.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={data.Title}
            width={300}
            height={450}
            className="rounded shadow-md object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <p><span className="font-semibold">Actors:</span> {data.Actors}</p>
          <p><span className="font-semibold">Year:</span> {data.Year}</p>
          <p><span className="font-semibold">Genre:</span> {data.Genre}</p>
          <p><span className="font-semibold">Director:</span> {data.Director}</p>
          <p><span className="font-semibold">Writer:</span> {data.Writer}</p>
          <p><span className="font-semibold">Plot:</span> {data.Plot}</p>
          <p><span className="font-semibold">Language:</span> {data.Language}</p>
          <p><span className="font-semibold">IMDB Rating:</span> {data.imdbRating}</p>
          <p><span className="font-semibold">Awards:</span> {data.Awards}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="border-t pt-6 space-y-10">
        <RatingSourceChart ratings={data.Ratings || []} />
        <GenreChart />
      </div>
    </div>
  );
}
