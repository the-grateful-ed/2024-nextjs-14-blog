import { Undo2Icon } from 'lucide-react';
import Link from 'next/link';

const CMSNavbar = () => {
  return (
    <nav className='relative flex w-full flex-wrap items-center justify-between bg-background py-2 lg:py-4'>
      <div className='flex w-full flex-wrap items-center justify-between px-3'>
        <Undo2Icon className='stroke-primary stroke-4' />
        <div className='ml-2'>
          <Link
            className='font-medium text-primary/75 flex flex-row text-2xl underline underline-offset-8 hover:decoration-gray-50 items-center'
            href='#'
          >
            <div className='items-center flex flex-row'>
              <div className='mx-2'>
                <svg
                  className='w-[35px] h-[35px] fill-[#8e8e8e]'
                  viewBox='0 0 640 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z'></path>
                </svg>
              </div>
              <span className='font-extrabold'>ed</span>
              <span className=' text-primary/80 font-extrabold'>nda</span>
              <span className='  text-foreground font-thin'>computer</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CMSNavbar;
