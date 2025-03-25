import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { z } from "zod";

export const formRegisterSchema = z.object({
  username: z
    .string({ required_error: "Invalid Username" })
    .min(1, "Insert Username"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .regex(/^\d{10,15}$/, "Phone number must be 10 to 15 digits"),
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

export type FormRegisterData = z.infer<typeof formRegisterSchema>;

export type UseFormRegisterProps = {
  options?: Partial<UseFormProps<FormRegisterData>>;
};

export function useFormRegister({ options }: UseFormRegisterProps = {}) {
  return useForm<FormRegisterData>({
    resolver: zodResolver(formRegisterSchema),
    mode: "onChange",
    ...options,
  });
}
