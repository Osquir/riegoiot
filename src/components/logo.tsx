import Image from 'next/image';

function logo() {
  return (
    <Image
      src='/udec.webp'
      width={24}
      height={24}
      alt='logo'
      className='h-max-[24px]'
    />
  );
}

export default logo;
