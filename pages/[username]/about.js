import React from 'react'
import { getSession } from 'next-auth/react';
const About = () => {
  return (
    <div>About</div>
  )
}

About.page = 'profile'

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

export default About