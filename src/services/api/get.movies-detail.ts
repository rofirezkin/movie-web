import { buildQueryParams } from "../generate-query-params";
import { http } from "../interceptor";
import { MovieDetail } from "./get.movie-detail";
import { MovieResponse } from "./get.movies.type";

export type MovieDetailRequest = {
  id?: string ;
 
};

export async function getMovieDetail(payload: MovieDetailRequest) {

  return await http.get<MovieDetail>(`&i=${payload.id}`);
}

export type ApiMovieDetailResponse = ReturnType<typeof getMovieDetail>;