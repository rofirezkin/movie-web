import {
    UseQueryOptions,
    useInfiniteQuery,
    useQuery,
  } from '@tanstack/react-query';
  
  import {useMemo} from 'react';


import { AxiosBaseError } from '../types/base-response';
import { ApiMovieResponse, getMovie, MovieRequest } from '../api/get.movies';
import { ApiMovieDetailResponse, getMovieDetail, MovieDetailRequest } from '../api/get.movies-detail';
import { MovieDetail } from '../api/get.movie-detail';
  
  export type CarouselItem = {
    id: string;
    image: string;
    title: string;
    subTitle: string;
    year: string;
  };
  
  export type useGetMovieProps = {
    params: MovieDetailRequest;
    options?: Partial<UseQueryOptions<Awaited<ApiMovieDetailResponse>, AxiosBaseError>>;
  };
  
  export const GET_MOVIES_QUERY_KEY = 'getMovieDetailQueryKey';
  

  export function useGetMovieDetaill({params, options}: useGetMovieProps) {
    const query = useQuery({
      refetchOnWindowFocus: false,
      queryKey: [GET_MOVIES_QUERY_KEY, params],
      queryFn: () => getMovieDetail(params),
      ...options,
    });
  
    const data = useMemo(() => query?.data?.data || null, [query.data]);
  
    const results = useMemo(
      () => ({
        ...query,
        data,
      }),
      [query, data],
    );
  
    return results;
  }
  