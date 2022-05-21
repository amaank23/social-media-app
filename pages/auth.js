import { useContext, useState } from "react";
import Login from "../components/auth/login"
import CreateAccountModal from "../components/modals/create-account-modal";
import { ModalContext } from "../context/modal-context";
import { getSession } from 'next-auth/react'


const Auth = () => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  return (
    <>
      <Login setIsModalVisible={setIsModalVisible} />
      {isModalVisible && (<CreateAccountModal setIsModalVisible={setIsModalVisible} />)}
    </>
  )
}

export async function getServerSideProps(context){
  const session = await getSession({ req: context.req })
  
  if(session){
    return {
      redirect: {
        destination: '/',
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


export default Auth