import React from 'react'
import FriendsList from '../../components/profile/friends-list'
import { getSession } from 'next-auth/react'

const Friends = () => {
  return (
    <FriendsList />
  )
}

Friends.page = 'profile'

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

export default Friends