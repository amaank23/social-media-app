import React from 'react'
import Profile from '../../components/profile/profile'
import { getSession } from 'next-auth/react'

const ProfilePage = () => {
  return (
    <Profile />
  )
}

ProfilePage.page = 'profile'


export async function getServerSideProps(context){
  const session = await getSession({ req: context.req })
  
  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      },
    }
  }
  return {
    props: {
      session: session
    }
  }
}

export default ProfilePage