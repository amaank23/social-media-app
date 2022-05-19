import React from 'react'
import ProfilePicture from '../profile/profile-picture'

const ProfilePhotoAndNameSection = () => {
  return (
    <div className='ml-8 relative  top-[-40px] after:'>
      <div className='flex items-center flex-col relative'>
        <div className="profile-pic w-[168px] h-[168px] rounded-full overflow-hidden relative">
          <ProfilePicture layout='fill' />
        </div>
        <div className='ml-5 flex flex-col items-center'>
          <h2 className='font-bold text-4xl'>Peter Parker</h2>
          <span className='text-lg font-semibold text-gray-500'>0 Friends</span>
        </div>
      </div>
      <div className='w-full bg-border-color h-[1px] absolute bottom-[-20px]'></div>
    </div>
  )
}

export default ProfilePhotoAndNameSection