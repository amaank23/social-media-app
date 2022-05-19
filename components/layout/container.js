import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='mx-auto flex flex-col max-w-full md:max-w-screen-md lg:max-w-[940px]'>
        {children}
    </div>
  )
}

export default Container