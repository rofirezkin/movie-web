'use server';

import { User } from 'next-auth';
import { cookies } from 'next/headers';

export type SetAuthDataProps = {
  token: string;
  user: User;
};

export async function setAuthData({ user, token }: SetAuthDataProps) {
  if (!user || !token) return;

}



export async function getCurrentAuth() {
  const cookie = await cookies();
  const tokenCookie = cookie.get('token')?.value || '';

  return {
    user:  null,
    token: tokenCookie,
  };
}