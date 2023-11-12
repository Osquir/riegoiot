import MobileSidebar from './mobile-sidebar';
import Logo from './logo';

function Sidebar() {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      <div className='w-full'>
        <div className='flex justify-center items-center gap-x-10 mr-10'>
          <Logo />
          <h1 className='text-center font-semibold text-xl'>Riego IoT</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
