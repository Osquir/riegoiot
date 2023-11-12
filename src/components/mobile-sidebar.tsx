import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import MobileNavbar from './mobile-navbar';
function MobileSibebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition duration-500'>
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent side='left' className=' p-0 bg-white'>
        <MobileNavbar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSibebar;
