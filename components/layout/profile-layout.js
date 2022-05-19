import React from 'react'
import Container from './container'
import CoverPhotoSection from './cover-photo-section'
import ProfilePageLinks from './profile-page-link'
import ProfilePhotoAndNameSection from './profile-photo-and-name-section'

const ProfileLayout = ({ children }) => {
  return (
      <>
        <Container>
            <CoverPhotoSection />
            <ProfilePhotoAndNameSection />
            <ProfilePageLinks />
            {children}
        </Container>
      </>
  )
}

export default ProfileLayout