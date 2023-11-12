'use client';

import axios, { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function RegisterPage() {
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const signupResponse = await axios.post('api/auth/signup', {
        email: formData.get('email'),
        password: formData.get('password'),
        fullname: formData.get('fullname'),
      });

      const res = await signIn('credentials', {
        email: signupResponse.data.email,
        password: formData.get('password'),
        redirect: false,
      });

      if (res?.ok) return router.push('/dashboard');

      // console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-neutral-100 px-8 py-10 rounded-md md:w-5/12 sm:w-4/5 lg:w-3/12'
      >
        {error && (
          <div className='bg-red-500 text-white p-1 mb-2 text-center'>
            {error}
          </div>
        )}

        <h1 className='text-3xl text-center font-bold mb-6'>Crear cuenta</h1>
        <input
          type='text'
          placeholder='Nombre completo'
          name='fullname'
          className='bg-zinc-200 px-4 py-2 block mb-2 w-full rounded-md'
          autoComplete='off'
        />
        <input
          type='email'
          placeholder='example@email.com'
          name='email'
          className='bg-zinc-200 px-4 py-2 block mb-2 w-full rounded-md'
          autoComplete='off'
        />
        <input
          type='password'
          placeholder='******'
          name='password'
          className='bg-zinc-200 px-4 py-2 block mb-2 w-full rounded-md'
          autoComplete='off'
        />
        <Button className='w-full'>Registrarse</Button>
      </form>
    </div>
  );
}

export default RegisterPage;
