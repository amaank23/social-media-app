import React from 'react'
import ProfilePicture from './profile-picture'

const FriendsList = () => {
  return (
    <section>
        <h2 className='text-3xl font-bold pb-3 border-b border-border-color'>Friends</h2>
        <div className='pt-8 grid grid-cols-4 gap-1 gap-y-5'>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
            <div className='flex items-center'>
                <ProfilePicture width={'50px'} height='50px' className={'rounded-full'} />
                <h3 className='font-semibold ml-3'>Aman Khan</h3>
            </div>
        </div>
    </section>
  )
}

export default FriendsList