'use client';

import { useState } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { ArrowDownToLine, Eye } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Button } from './ui/button';

function Profile() {
  type User = {
    _id?: string | null;
    email?: string | null;
    fullname?: string | null;
    createdAt?: Date | null;
  };

  const [showPDF, setShowPDF] = useState(false);

  const { data: session, status } = useSession() as {
    data: { user: User } | null;
    status: 'loading' | 'authenticated' | 'unauthenticated';
  };

  return (
    <>
      <div className='mt-10 h-[calc(100vh-1rem)] flex flex-col items-center'>
        <div className='bg-neutral-100 px-8 py-10 rounded-md w-11/12 md:w-3/4'>
          <h1 className='text-xl md:text-4xl font-semibold text-center'>
            {session?.user?.fullname}
          </h1>
          <Separator />
          <p>
            Email:
            <span className='text-sm text-blue-500 underline'>
              {session?.user?.email}
            </span>
          </p>
          <p className='text-sm mb-16'>
            Perfil creado el:{' '}
            {session?.user?.createdAt
              ? new Date(session?.user?.createdAt).toLocaleDateString()
              : 'Fecha no disponible'}
          </p>
          <div className='flex items-center'>
            <Button variant='outline' onClick={() => setShowPDF(!showPDF)}>
              Manual de usuario
              <Eye className='w-4 h-4 ml-2' />
            </Button>
            <a href='/Manual-de-usuario-riego-IOT-v1.pdf' download>
              <Button variant='outline' className='ml-2'>
                <ArrowDownToLine className='w-4 h-4' />
              </Button>
            </a>
          </div>
          {showPDF && (
            <iframe
              src='/Manual-de-usuario-riego-IOT-v1.pdf'
              width='100%'
              height='600'
              className='mt-16'
            ></iframe>
          )}
        </div>
      </div>
      {/* <pre className='text-xs'>
        {JSON.stringify({ session, status }, null, 2)}
      </pre> */}
    </>
  );
}

export default Profile;
