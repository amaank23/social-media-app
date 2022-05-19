import React, { useEffect, useRef } from 'react'
import ProfilePicture from '../profile/profile-picture';
import PhotographIcon from '@heroicons/react/solid/PhotographIcon';
import VideoCameraIcon from '@heroicons/react/solid/VideoCameraIcon';
import XCircleIcon from '@heroicons/react/solid/XCircleIcon'
import Modal from '../modals/modal';

const AddPostModal = ({  addImageOrVideoToPost, removeImageOrVideoToPost, addImageOrVideo, setAddPostModal }) => {

    const modalRef = useRef();
    // useEffect(() => {
        
    //     console.log(modalRef.current);
    //         document.addEventListener('click', (e) => {
    //             if(!modalRef.current.contains(e.target)){
    //                 setAddPostModal(false)
    //             }
    //         })
    //         return () => {
    //             console.log('logged');
    //             document.removeEventListener('click', (e) => {
    //                 console.log('removed');
    //             })
    //         }

    //  }, [])

    return (
        <Modal>
            <div className='flex mb-3 items-center'>
                <ProfilePicture width={'40'} height={'40'} className={'rounded-full'} />
                <h4 className='flex-1 ml-2 text-heading-size font-semibold'>Peter Parker</h4>
            </div>
            <div className='mb-2'>
                <textarea className='text-[#000] resize-none border-none w-full outline-none' placeholder="What's on your mind, Peter? " name="" id="" cols="30" rows="2"></textarea>
            </div>
            {addImageOrVideo && (
                <div className='bg-secondary p-3 flex justify-center items-center flex-col mb-5 relative h-36'>
                <PhotographIcon className='w-6' />
                <h5 className='font-semibold'>Add Photos/Videos</h5>
                <p className='text-[14px] text-grey'>or drag and drop</p>
                <button onClick={removeImageOrVideoToPost} className='absolute top-2 right-2 text-grey'><XCircleIcon className='w-5' /></button>
            </div>
            )}
            <div className="add-post-bottom flex pt-3 border-t border-border-color">
                <button  onClick={() => 
                    {
                    addImageOrVideoToPost()
                    }
                    }className='flex-1 flex justify-center hover:bg-secondary p-2'>
                    <PhotographIcon className='w-6 text-[green]' />
                    <span className='ml-2 text-grey font-semibold text-heading-size'>Photo</span>
                    </button>
                    <button  onClick={() => 
                    {
                        addImageOrVideoToPost()
                    }
                    } className='flex-1 flex justify-center hover:bg-secondary p-2'>
                <VideoCameraIcon className='w-6 text-[red]' />
                <span className='ml-2 text-grey font-semibold text-heading-size'>Video</span>
                </button>
            </div>
            <div>
                <button className='bg-logo w-full p-2 mt-2 text-primary'>Post</button>
            </div>
            
        </Modal>
            
          
      )
}

export default AddPostModal