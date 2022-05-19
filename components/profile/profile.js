import React from 'react'
import Image from 'next/image'
import PostContainer from '../posts/post-container'
import Link from 'next/link'

const Profile = () => {
  return (
    <section className='pl-4 pr-4 w-full md:w-[908px]'>
      <div  className='flex md:flex-row'>
        <div className='basis-full  md:basis-[360px] mr-2'>
          <div className="photos-sec">
            <div className='flex justify-between mb-4 items-center'>
              <h3 className='text-xl font-bold'>Photos</h3>
              <Link href="/profile/photos" scroll={false}>See all photos</Link>
            </div>
            <div className=' grid grid-cols-3 gap-1'>
              <div className='w-full h-[80px] relative m-1'>
                <Image src={'/img/1.jpg'} layout='fill' objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill'  objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill'  objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill' objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill'  objectFit='cover' />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill' objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill' objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill' objectFit='cover'  />
              </div>
              <div className='w-full h-[80px] relative  m-1'>
                <Image src={'/img/1.jpg'} layout='fill'  objectFit='cover' />
              </div>
              
              
            </div>
          </div>
        </div>
        <div className='basis-full  md:basis-[500px] ml-2'>
          <PostContainer />
        </div>
      </div>
    </section>
  )
}

Profile.page = 'profile'

export default Profile