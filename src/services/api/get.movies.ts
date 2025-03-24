import { buildQueryParams } from "../generate-query-params";
import { http } from "../interceptor";
import { MovieResponse } from "./get.movies.type";

export type MovieRequest = {
  search?: string | null;
  page?: number;
  year?: string | null;
  type?: string | null;
};

export async function getMovie(payload: MovieRequest) {
  const queryString = buildQueryParams(payload);

  return await http.get<MovieResponse>(`&${queryString}`);
}

export type ApiMovieResponse = ReturnType<typeof getMovie>;