import React from 'react'
import { getSession } from 'next-auth/react'
const Photos = () => {
  return (
    <div>Photos</div>
  )
}
Photos.page = 'profile'

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

export default Photos