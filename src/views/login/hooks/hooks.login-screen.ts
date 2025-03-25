import { useAuthStore } from "@/store/useAuthStore";
import { FormLoginData, useFormLogin } from "./hooks.form-login";
import { useCallback, useState } from "react";

export const useLoginScreen = () => {
  const { setToken } = useAuthStore.getState();

  const [isLoadingLogin] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    setError,
  } = useFormLogin();

  const onSubmit = useCallback(
    ({ username, password }: FormLoginData) => {
      if (username === "testing" && password === "!Testing123") {
        setToken("jwt token");
      } else {
        console.log("testing");
      }
    },
    [setToken]
  );

  return {
    isLoadingLogin,
    onSubmit,
    control,
    errors,
    isValid,
    handleSubmit,
    reset,
    setError,
  };
};
