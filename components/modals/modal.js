import React, { useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import XCircleIcon from '@heroicons/react/solid/XCircleIcon'
import { ModalContext } from '../../context/modal-context';

const Modal = ({ children ,showAddPostModal, addImageOrVideoToPost, removeImageOrVideoToPost, addImageOrVideo, setAddPostModal }) => {

    const modalRef = useRef();
    const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
    return ReactDOM.createPortal((
        <div className=' text-text-color fixed w-full top-0 left-0 right-0 bottom-0 h-full flex justify-center items-center bg-primary-with-opacity'>
          <div className='bg-primary p-4 relative lg:w-1/3 w-3/4 md:w-2/4 rounded-md' ref={modalRef} >
            {children}
            <button onClick={() => setIsModalVisible(false)} className='absolute top-2 right-2 text-grey'><XCircleIcon className='w-6' /></button>
          </div>
        </div>
      ), document.getElementById('modal'));
}

export default Modal