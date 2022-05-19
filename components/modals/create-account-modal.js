import React, { useRef } from 'react'
import { useState } from 'react';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import Modal from './modal';
const CreateAccountModal = ({ setIsModalVisible }) => {

  const modalRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState('')
  const router = useRouter()
  async function handleSubmit(e) {
    e.preventDefault()


    if(password !== confirmPassword){
      setError('passwords does not match')
      return;
    }

    const data = {
      name,
      email,
      password
    }
    let res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if(res.status === 201){
      const newRes = await signIn('credentials', { email, password, redirect: false });
      
      if(newRes.status === 200){
        router.push('/')
        setIsModalVisible(false)
      }

    }

    if(res.status === 409){
      res = await res.json()
      setError(res.message)
    }


  }

  return (
    <Modal>
      <div className=' text-text-color fixed w-full top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-center bg-primary-with-opacity'>
        <div className='bg-primary p-4 relative lg:w-1/3 w-3/4 md:w-2/4 rounded-md' ref={modalRef} >
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>

            <div className="bg-white shadow-lg rounded flex flex-col">
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Email" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              </div>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                {error ? (<small className='text-red-600'>{error}</small>) : ''}
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded bg-logo" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </Modal>
  )
}

export default CreateAccountModal