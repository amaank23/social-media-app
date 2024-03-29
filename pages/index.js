import Head from 'next/head'
import Image from 'next/image'
import NewsFeed from '../components/newsfeed/newsfeed'
import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <div className='bg-secondary'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <NewsFeed />
    </div>
  )
}

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