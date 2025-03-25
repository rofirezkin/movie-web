import { useAuthStore } from "@/store/useAuthStore";
import { FormLoginData, useFormLogin } from "./hooks.form-login";
import { useCallback, useState } from "react";
import { authenticate } from "../action/action";

export const useLoginScreen = () => {
  const { setToken } = useAuthStore.getState();

  const [isLoadingLogin] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
    reset,
    setError,
  } = useFormLogin();
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: FormLoginData) => {
    setServerError(null);

    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    const result = await authenticate(undefined, formData);
    if (result?.error) {
      setServerError(result.error);
    }
  };



  return {
    isLoadingLogin,
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
