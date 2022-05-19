import React from 'react'
import Image from 'next/image'

const ProfilePicture = ({ width, height, className, layout }) => {

  if(layout && layout === 'fill'){
    <Image src={'/img/2.jpg'} layout={layout} className={className} />
  }
  return (
    <Image src={'/img/2.jpg'} width={width} objectFit='cover' height={height} layout={layout ? layout : ''} className={className} />
  )
}

export default ProfilePicture