export type MovieItem =  {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string; // bisa lebih spesifik: 'movie' | 'series' | 'episode'
    Poster: string;
  }
  
  export type MovieResponse = {
    Search: MovieItem[];
    totalResults: string;
    Response: 'True' | 'False';
  }