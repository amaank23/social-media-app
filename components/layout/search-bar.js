import React from 'react';
import SearchIcon from '@heroicons/react/solid/SearchIcon'

const SearchBar = () => {
  return (
          <form>
              <div className='flex w-full items-center relative  ml-3'>
                <input type={'text'} className="h-5  bg-secondary p-4 rounded-full text-[14px]" placeholder='Search the friend...'/>
                <div className='h-5 absolute right-6'>
                    <SearchIcon className='w-5 text-sm text-grey h-5 border-1 border-primary' />
                </div>
              </div>
          </form>
  );
};

export default SearchBar;
