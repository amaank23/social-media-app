import React from 'react';
import ProfilePicture from '../../profile/profile-picture';

const LeftSideBar = () => {
  return <div className='hidden lg:basis-1/4 lg:block'>
    <ul>
      <li className='flex items-center mb-4'><ProfilePicture width={'40'} height={'40'} className='rounded-full' /><h3 className='ml-3 capitalize font-semibold text-heading-size'>Peter Parker</h3></li>
      <li className='text-center capitalize font-semibold text-heading-size mb-2'>Friends</li>
      <li className=' text-center capitalize font-semibold text-heading-size'>Saved Posts</li>
    </ul>
  </div>;
};

export default LeftSideBar;
