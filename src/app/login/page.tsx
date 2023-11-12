'use client';

import { FormEvent, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';

function LoginPage() {
  const { status } = useSession();
  const [loading, setLoading] = useState(false); // [loading, setLoading
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res?.error) return setError(res.error);

    if (res?.ok) return router.push('/dashboard'); // Despues de logearse, redirige a la pagina de dashboard
  };

  if (status === 'loading') {
    return (
      <div className='h-screen flex justify-center items-center '>
        <Spinner size='lg' />
      </div>
    );
  }

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-neutral-100 px-8 py-10 rounded-md md:w-5/12 sm:w-4/5 lg:w-3/12 lgx:bg-red-500'
      >
        {error && (
          <div className='bg-red-500 text-white p-1 mb-2 text-center'>
            {error}
          </div>
        )}

        <h1 className='text-3xl text-center font-bold mb-6'>Acceder</h1>
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
        <Button className='w-full'>Iniciar sesión</Button>
      </form>
    </div>
  );
}

export default LoginPage;
