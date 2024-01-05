import { Skeleton } from './ui/skeleton';

export default function SkeletonCrops() {
  return (
    <div className='flex justify-center'>
      <div className='my-12'>
        <Skeleton className='w-full h-[36px]' />
        <div className='my-6 flex justify-center gap-x-5'>
          <Skeleton className='w-[180px] h-[108px]' />
          <Skeleton className='w-[180px] h-[108px]' />
          <Skeleton className='w-[180px] h-[108px]' />
        </div>
      </div>
    </div>
  );
}
