import { useContext, useState } from "react";
import Login from "../components/auth/login"
import CreateAccountModal from "../components/modals/create-account-modal";
import { ModalContext } from "../context/modal-context";


const Auth = () => {
  const { isModalVisible, setIsModalVisible } = useContext(ModalContext);
  return (
    <>
      <Login setIsModalVisible={setIsModalVisible} />
      {isModalVisible && (<CreateAccountModal setIsModalVisible={setIsModalVisible} />)}
    </>
  )
}

export default Auth