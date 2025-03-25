
import { MovieItem } from '@/services/api/get.movies.type';
import {create} from 'zustand';

interface MovieState {
  isAuthenticated: boolean;
  movies: MovieItem[];
  searchResults: string | null;
  selectedYear: string | null;
  selectedType: string | null;
  setAuthenticated: (auth: boolean) => void;
  setMovies: (movies: MovieItem[]) => void;
  setSearchResults: (results: string | null) => void;
  setSelectedYear: (filters: string | null) => void;
  setSelectedType: (filters: string | null) => void;
}

export const useMovieStore = create<MovieState>(set => ({
  isAuthenticated: false,
  movies: [],
  searchResults: null,
  selectedYear: null,
  selectedType: null,
  setAuthenticated: auth => set({isAuthenticated: auth}),
  setMovies: movies => set({movies}),
  setSearchResults: results => set({searchResults: results}),
  setSelectedYear: year => set({selectedYear: year}),
  setSelectedType: type => set({selectedType: type}),
}));