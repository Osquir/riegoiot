'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Spinner } from '@/components/spinner';
import Logo from './logo';

function Navbar() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='h-full flex justify-center items-center '>
        <Spinner size='lg' />
      </div>
    );
  }

  return (
    <nav className='bg-zinc-100 p-[10.5px]'>
      <div className='flex md:justify-between mx-auto md:px-8 text-xs md:text-md'>
        <Link href='/' className='flex gap-x-4'>
          <Logo />
          <h1 className='font-bold text-sm md:text-md lg:text-lg xl:text-xl hidden md:block'>
            Riego IoT
          </h1>
        </Link>

        <ul className='flex gap-x-2'>
          <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
            <Link href='/crops'>Cultivos</Link>
          </li>
          <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
            <Link href='/about'>Acerca de</Link>
          </li>
          {session ? (
            <>
              <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
                <Link href='/dashboard'>Panel</Link>
              </li>
              <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
                <Link href='/dashboard/profile'>Perfil</Link>
              </li>
              <li className='text-xs md:text-base'>
                <button
                  className='px-3 py-1 text-orange-900  hover:text-orange-400 transistion duration-500 ease-in-out'
                  onClick={() => signOut()}
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
                <Link href='/login'>Iniciar Sesión</Link>
              </li>
              <li className='px-3 py-1 hover:text-orange-400 text-xs md:text-base'>
                <Link href='/register'>Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
