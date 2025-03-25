"use client";

import { useAuthStore } from "@/store/useAuthStore";

import { PropsWithChildren } from "react";

type AuthInitializerProps = PropsWithChildren<{
  token: string;
}>;

export function AuthInitializer({
  children,
  token = "",
}: AuthInitializerProps) {
  useAuthStore.setState((state) => ({
    ...state,
    token,
  }));

  return <>{children}</>;
}
