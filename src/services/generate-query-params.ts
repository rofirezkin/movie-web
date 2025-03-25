import { MovieRequest } from "./api/get.movies";

export function buildQueryParams(payload: MovieRequest): string {
  const query: string[] = [];

  if (payload.search) {
    query.push(`s=${encodeURIComponent(payload.search)}`);
  }
  if (payload.page) {
    query.push(`page=${payload.page}`);
  }
  if (payload.year) {
    query.push(`y=${payload.year}`);
  }
  if (payload.type) {
    query.push(`type=${payload.type}`);
  }

  return query.join("&"); // hasil: s=batman&page=2
}
