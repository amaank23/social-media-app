import React from 'react'
import ChevronDownIcon from '@heroicons/react/solid/ChevronDownIcon'
import ThumbUpIcon from '@heroicons/react/solid/ThumbUpIcon'
import AnnotationIcon from '@heroicons/react/solid/AnnotationIcon'
import ShareIcon from '@heroicons/react/solid/ShareIcon'
import Image from 'next/image'
import { useState } from 'react'


const Post = () => {
    const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className='post bg-primary text-text-color p-5 mt-10 shadow-lg rounded'>
        <div className='post-top flex justify-between mb-3'>
            <div className="user-detail flex items-center">
            <Image
                src="/img/2.jpg"
                alt="Picture of the author"
                width={40}
                height={40}
                className='rounded-full'
            />
            <div className='flex flex-col ml-2 '>
                <h3 className='capitalize font-semibold text-heading-size'>Peter Parker</h3>
                <span className='text-sm text-grey'>9h</span>
            </div>
            </div>
            <div className="post-dropdown relative">
                <button onClick={() => setShowDropdown(prev => !prev)}><ChevronDownIcon className='w-4 text-sm' /></button>
                {showDropdown && (
                    <div className='absolute shadow p-4 bg-primary w-max'>
                        <ul><li><button className=''>Save Post</button></li></ul>
                    </div>
                )}
            </div>
        </div>
        <div className="post-description mb-4">
            <p className='text-sm'>Adipisci voluptatibus voluptatum a ullam repellendus. At quos id veritatis autem nam illum impedit voluptatem quaerat, modi laboriosam dolore pariatur voluptas nobis!</p>
        </div>
        <div className="post-image">
        <Image
        src="/img/1.jpg"
        alt="Picture of the author"
        width={500}
        height={250}
        layout='responsive'
      />
        </div>
        <div className="post-action-btns flex ">
        <div className='flex-1 flex'>
            <button className='flex w-full items-center  justify-center lowercase bg-secondary text-grey rounded m-2 p-1'>
                <ThumbUpIcon className='w-4' />
                <span className='ml-1 text-heading-size capitalize font-semibold'>Like</span>
            </button>
        
        </div>
        <div className='flex-1 flex'>
            <button className='flex w-full items-center  justify-center lowercase bg-secondary rounded m-2 p-1 text-grey'>
                <AnnotationIcon className='w-4' />
                <span className='ml-1 text-heading-size capitalize font-semibold '>Comment</span>
            </button>
        
        </div>
        <div className='flex-1 flex'>
            <button className='flex w-full items-center  justify-center lowercase bg-secondary rounded m-2 p-1 text-grey'>
                <ShareIcon className='w-4' />
                <span className='ml-1 text-heading-size capitalize font-semibold'>Share</span>
            </button>
        
        </div>
        </div>
    </div>
  )
}

export default Post