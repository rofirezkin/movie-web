'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function authenticate(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const cookie = await cookies()


  if (email === 'testing@example.com' && password === '!Testing123') {
    cookie.set('token', 'dummy-jwt-token', {
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, 
    });

    redirect('/');
  }

  return { error: 'Invalid email or password' };
}
