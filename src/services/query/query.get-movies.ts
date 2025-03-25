import {
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

import { useMemo } from "react";

import { AxiosBaseError } from "../types/base-response";
import { ApiMovieResponse, getMovie, MovieRequest } from "../api/get.movies";

export type CarouselItem = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  year: string;
};

export type useGetMovieProps = {
  params: MovieRequest;
  options?: Partial<UseQueryOptions<Awaited<ApiMovieResponse>, AxiosBaseError>>;
};

export const GET_MOVIES_QUERY_KEY = "getMovieQueryKey";

export const GET_MOVIES_INFINITE_QUERY_KEY = "getMovieInfiniteQueryKey";

export function useGetMovie({ params, options }: useGetMovieProps) {
  const query = useQuery({
    refetchOnWindowFocus: false,
    queryKey: [GET_MOVIES_QUERY_KEY, params],
    queryFn: () => getMovie(params),
    ...options,
  });

  const data = useMemo(() => query?.data || null, [query.data]);

  const results = useMemo(
    () => ({
      ...query,
      data,
    }),
    [query, data]
  );

  return results;
}

export function useGetMoviesInfinite(params: MovieRequest) {
  const fetchActiveGroups = async ({
    pageParam = 1,
  }: {
    pageParam?: number;
  }) => {
    const response = await getMovie({
      ...params,
      page: pageParam,
    });

    const totalResults = parseInt(response.data.totalResults || "0", 10);
    const totalPages = Math.ceil(totalResults / 10);

    return {
      data: response.data.Search,
      currentPage: pageParam,
      totalPages,
    };
  };

  return useInfiniteQuery({
    queryKey: [GET_MOVIES_INFINITE_QUERY_KEY, params],
    queryFn: fetchActiveGroups,
    getNextPageParam: (lastPage) => {
      const nextPage =
        lastPage.currentPage < lastPage.totalPages
          ? lastPage.currentPage + 1
          : undefined;
      return nextPage;
    },
    initialPageParam: 1,

    select: (data) => {
      const allData = data.pages.flatMap((page) => page.data || []);

      const dataMap = allData?.map((res) => {
        const dataMapping: CarouselItem = {
          id: res.imdbID,
          image: res.Poster,
          subTitle: res.Type,
          title: res.Title,
          year: res.Year,
        };
        return dataMapping;
      });

      return {
        ...data,
        dataMap,
      };
    },
  });
}
