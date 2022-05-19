import React from 'react'
import Image from 'next/image'

const CoverPhotoSection = () => {
  return (
    <div className='w-full h-[350px]'>
        <div className='relative w-full h-full'>
        <Image
        src="/img/1.jpg"
        alt="Picture of the author"
        width={500}
        height={250}
        layout='fill'
      />
            <button className='absolute right-2 bottom-3 bg-primary p-2 rounded-lg shadow-md'>Add Cover Image</button>
        </div>

    </div>
  )
}

export default CoverPhotoSection