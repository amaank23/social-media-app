import { useRouter } from 'next/router'
import Header from '../components/layout/header'
import ProfileLayout from '../components/layout/profile-layout'
import ModalContextProvider from '../context/modal-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if(Component.page && Component.page === 'profile'){
    return (
      <>
        <Header />
        <ModalContextProvider>  
          <ProfileLayout>
            <Component {...pageProps} />
          </ProfileLayout>
        </ModalContextProvider>
      </>
    )
  }
  return (
    <>
      <Header />
      <ModalContextProvider> 
        <Component {...pageProps} />
      </ModalContextProvider>
    </>
  )
}

export default MyApp
