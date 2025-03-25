'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

import { Button } from '@/components/button/button';

import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLoginScreen } from './hooks/hooks.login-screen';
import { redirect } from 'next/navigation';
import Link from 'next/link';


const loginSchema = z.object({
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(6, { message: 'Password minimal 6 karakter' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {control, errors, handleSubmit, onSubmit, isLoadingLogin, isValid, reset, serverError, isSubmitting} = useLoginScreen()



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          {/* Email */}
          <div>
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="username">
            </label>
            <div className="relative">
              <Controller
              defaultValue=""
              control={control}
              name='username'
              render={({field: {value,onChange}}) => (
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="usernamen"
                  type="text"
                  placeholder="Enter your username"
                  value={value}
                  onChange={onChange}
                />
              )}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="password">
              Password
            </label>
            <div className="relative">
            <Controller
              defaultValue=""
              control={control}
              name='password'
              render={({field: {value,onChange}}) => (
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="usernamen"
                  type="password"
                  placeholder="Enter your password"
                  value={value}
                  onChange={onChange}
                />
        
              )
            }
            />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>
        </div>

        <LoginButton pending={isSubmitting|| !isValid} />

      <Link href={"/register"}>
        <Button className="mt-4 w-full" >
            Register <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
      </Link>
        {serverError && (
          <div className="flex h-8 items-end space-x-1 mt-2" aria-live="polite" aria-atomic="true">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{serverError}</p>
          </div>
        )}
      </div>
    </form>
  );
}

function LoginButton({ pending }: { pending: boolean }) {
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
