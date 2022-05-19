import React, { useContext, useState } from 'react';
import { ModalContext } from '../../../context/modal-context';
import AddPost from '../../posts/add-post';
import AddPostModal from '../../posts/add-post-modal';
import PostContainer from '../../posts/post-container';

const MainContent = () => {
  const [addImageOrVideo, setAddImageOrVideo] = useState(false)

  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);

  function addImageOrVideoToPost(){
    setAddImageOrVideo(true)
  }
  function removeImageOrVideoToPost(){
    setAddImageOrVideo(false)
  }
  return (
    <div className='basis-full lg:basis-1/2 '>
      <AddPost setIsModalVisible={setIsModalVisible} addImageOrVideoToPost={addImageOrVideoToPost} />
      {isModalVisible && (<AddPostModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} addImageOrVideo={addImageOrVideo}  addImageOrVideoToPost={addImageOrVideoToPost} removeImageOrVideoToPost={removeImageOrVideoToPost} />)}
      <PostContainer />
    </div>
  );
};

export default MainContent;
