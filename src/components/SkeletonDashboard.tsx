import { Skeleton } from './ui/skeleton';

export default function SkeletonCard() {
  return (
    <div>
      <div className='mt-1 grid grid-cols-3 justify-center gap-x-2'>
      <Skeleton className='w-[320px] h-[320px]' />
      <Skeleton className='w-[320px] h-[550px]' />
      <Skeleton className='w-[320px] h-[550px]' />
    S</div>
    </div>
  );
}
