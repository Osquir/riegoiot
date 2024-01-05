import SkeletonDashboard from '@/components/SkeletonDashboard';

export default function loading() {
  return (
    <main>
      <div className='flex justify-center w-full'>
        <SkeletonDashboard />
      </div>
    </main>
  );
}
