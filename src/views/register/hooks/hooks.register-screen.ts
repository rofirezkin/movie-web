import { useAuthStore } from "@/store/useAuthStore";

import { useCallback, useState } from "react";

import { FormRegisterData, useFormRegister } from "./hooks.form-register";
import { redirect } from "next/navigation";

export const useRegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    reset,
    setError,
  } = useFormRegister();
  const setUser = useAuthStore((state) => state.setUser);
  const [serverError] = useState<string | null>(null);

  const onSubmit = useCallback(
    ({ username, email, phone }: FormRegisterData) => {
      setUser({ email, phone, username });
      redirect("/login");
    },
    [setUser]
  );

  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
    isValid,
    handleSubmit,
    reset,
    setError,
    serverError,
  };
};
