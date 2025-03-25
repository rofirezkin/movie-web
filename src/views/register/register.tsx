"use client";

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import { Button } from "@/components/button/button";

import { Controller } from "react-hook-form";
import { useRegisterScreen } from "./hooks/hooks.register-screen";

export default function RegisterForm() {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    isValid,
    serverError,
    isSubmitting,
  } = useRegisterScreen();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          {/* Username */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <Controller
                defaultValue=""
                control={control}
                name="username"
                render={({ field: { value, onChange } }) => (
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Controller
                defaultValue=""
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="relative">
              <Controller
                defaultValue=""
                control={control}
                name="phone"
                render={({ field: { value, onChange } }) => (
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Controller
                defaultValue=""
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <RegisterButton pending={isSubmitting || !isValid} />

        {/* Server error */}
        {serverError && (
          <div
            className="flex h-8 items-end space-x-1 mt-2"
            aria-live="polite"
            aria-atomic="true"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{serverError}</p>
          </div>
        )}
      </div>
    </form>
  );
}

function RegisterButton({ pending }: { pending: boolean }) {
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
