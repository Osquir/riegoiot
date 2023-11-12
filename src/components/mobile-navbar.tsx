'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Spinner } from '@/components/spinner';
import Logo from './logo';
import { Separator } from '@/components/ui/separator';

function MobileNavbar() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='h-full flex justify-center items-center '>
        <Spinner size='lg' />
      </div>
    );
  }

  return (
    <nav className=''>
      <div className='flex flex-col mt-5'>
        <Link href='/' className='flex gap-x-10 justify-center items-center'>
          <Logo />
          <h1 className='font-bold'>Riego IoT</h1>
        </Link>

        <ul className='flex flex-col gap-y-6 text-left mt-10 font-semibold'>
          <Link href='/crops'>
            <li className='px-3 hover:text-orange-400 '>Cultivos</li>
          </Link>
          <Separator />
          <Link href='/about'>
            <li className='px-3  hover:text-orange-400 '>Acerca de</li>
          </Link>

          <Separator />

          {session ? (
            <>
              <Link href='/dashboard'>
                <li className='px-3  hover:text-orange-400 '>Panel</li>
              </Link>
              <Separator />
              <Link href='/dashboard/profile'>
                <li className='px-3  hover:text-orange-400 '>Perfil</li>
              </Link>
              <Separator />

              <button
                className='px-3  text-orange-900  hover:text-orange-400 transistion duration-500 ease-in-out'
                onClick={() => signOut()}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href='/login'>
                <li className='px-3 text-center hover:text-orange-400 '>
                  Iniciar Sesión
                </li>
              </Link>
              <Separator />
              <Link href='/register'>
                <li className='px-3 text-center hover:text-orange-400 '>
                  Registrarse
                </li>
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar;
