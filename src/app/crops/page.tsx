import Image from 'next/image';
import Link from 'next/link';

async function CropPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section className=''>
      <div className='my-12'>
        <h1 className='text-2xl uppercase font-extralight text-center'>
          Tipos de cultivos soportados
        </h1>
        <div className='flex flex-col items-center md:flex-row gap-y-5 md:gap-y-0 justify-center gap-x-5 mt-6'>
          <Link
            href='https://www.intagri.com/articulos/hortalizas/requerimientos-de-clima-y-suelo-para-el-cultivo-de-la-papa'
            target='_blank'
          >
            <Image
              src='/papa.webp'
              width={182}
              height={182}
              alt='Cultivo de papa'
              title='Cultivo de papa'
              className='rounded-md border-[1.5px] border-gray-600 hover:cursor-pointer h-[110px]'
            />
            <p>Cultivo de papa</p>
          </Link>
          <Link
            href='https://wikifarmer.com/es/como-cultivar-lechuga-guia-completa-de-cultivo-de-la-lechuga-desde-la-siembra-hasta-la-cosecha/'
            target='_blank'
          >
            <Image
              src='/lechuga.jpg'
              width={182}
              height={182}
              alt='Cultivo de lechuga'
              title='Cultivo de lechuga'
              className='rounded-md border-[1.5px] border-gray-600 hover:cursor-pointer h-[110px]'
            />
            <p>Cultivo de lechuga</p>
          </Link>

          <Link
            href='https://repositorio.sena.edu.co/bitstream/handle/11404/7075/manual_propagacion_acondicionamiento_arveja.pdf'
            target='_blank'
          >
            <Image
              src='/arveja.jpg'
              width={182}
              height={182}
              alt='Cultivo de arveja'
              title='Cultivo de arveja'
              className='rounded-md border-[1.5px] border-gray-600 hover:cursor-pointer h-[110px]'
            />
            <p>Cultivo de arveja</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CropPage;
