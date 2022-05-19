import React from 'react';
import LeftSideBar from './left-sidebar/left-sidebar';
import MainContent from './main-content/main-content';
import RightSidebar from './right-sidebar/right-sidebar';

const NewsFeed = () => {
  return (
      <section className='flex'>
          <LeftSideBar />
          <MainContent />
          <RightSidebar />
      </section>
  );
};

export default NewsFeed;
