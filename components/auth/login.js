import { useState } from 'react'
import { signIn } from 'next-auth/react'

const Login = ({ setIsModalVisible }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const res = await signIn('credentials', { email, password, redirect: false })
        console.log(res);

        
    }
  return (
    <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col  max-w-[400px] mx-auto my-20">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="******************" />
      <button className="text-xs text-logo" onClick={() => setIsModalVisible(true)}>create new account</button>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded bg-logo" type="button" onClick={handleSubmit}>
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</div>
  )
}

export default Login