"use client";

import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export type QueryClientProviderProps = PropsWithChildren;
export const queryClient = new QueryClient();

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return <Provider client={queryClient}>{children}</Provider>;
}
