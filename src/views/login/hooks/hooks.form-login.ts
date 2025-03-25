import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

export const formLoginSchema = z.object({
  username: z
    .string({ required_error: "Invalid Username" })
    .min(1, "Insert Username"),
  password: z
    .string({ required_error: "Invalid Password" })
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/\d/, "Password must include at least one number")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must include at least one special character"
    ),
});

export type FormLoginData = z.infer<typeof formLoginSchema>;

export type UseFormLoginProps = {
  options?: Partial<UseFormProps<FormLoginData>>;
};

export function useFormLogin({ options }: UseFormLoginProps = {}) {
  return useForm<FormLoginData>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
    ...options,
  });
}
