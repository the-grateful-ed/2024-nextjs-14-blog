import React from 'react';

interface Props {
  title: string | '';
}

const Header = ({ title = '' }: Props) => {
  return (
    <header>
      <div className='bg-transparent px-6 py-8 text-center'>
        <h1 className='mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-600 sm:text-4xl uppercase font-kalam'>{title}</h1>
      <hr className='my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
      </div>
    </header>
  );
};

export default Header;
