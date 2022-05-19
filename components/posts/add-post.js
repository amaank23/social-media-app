import React from 'react'
import Image from 'next/image'
import PhotographIcon from '@heroicons/react/solid/PhotographIcon'
import VideoCameraIcon from '@heroicons/react/solid/VideoCameraIcon'

const AddPost = ({ setIsModalVisible, addImageOrVideoToPost }) => {
  
  return (
    <div className='add-post p-5 bg-primary text-text-color  shadow-lg rounded'>
      <div className="add-post-top flex items-center pb-3">
        <Image src={'/img/2.jpg'} width='40'  height={'40'} className='rounded-full' />
        <button onClick={() => setIsModalVisible(true)} className='bg-secondary text-grey flex-1 ml-3 text-left p-2 pl-5 rounded-full hover:opacity-70'>What's on your mind, peter</button>
      </div>
      <div className="add-post-bottom flex pt-3 border-t border-[#0000002c]">
        <button onClick={() => 
          {
            setIsModalVisible(true)
           addImageOrVideoToPost()
          }
          }  className='flex-1 flex justify-center hover:bg-secondary p-2 items-center'>
          <PhotographIcon className='w-6 text-[green]' />
          <span className='ml-2 text-grey font-semibold text-heading-size'>Video</span>
        </button>
        <button onClick={() => {
          {
            setIsModalVisible(true)
           addImageOrVideoToPost()
          }
        }}  className='flex-1 flex justify-center hover:bg-secondary p-2'>
          <VideoCameraIcon className='w-6 text-[red]' />
          <span  className=' ml-2 text-grey font-semibold text-heading-size'>Photo</span>
        </button>
      </div>
    </div>
  )
}

export default AddPost