'use client'

import { useSession } from 'next-auth/react';
import { Spinner } from './spinner';

function DashboardComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='h-screen flex justify-center items-center '>
        <Spinner size='lg' />
      </div>
    );
  }

  return (
    <iframe
      src='https://riegoiot.online:1880/ui/#!/0?socketid=1ihurSYdwFEMI9RKAAAV'
      className='
        w-full
        h-[calc(100vh-3.5rem)]
        border-none
        overflow-hidden
      '
    />
  );
}

export default DashboardComponent;
