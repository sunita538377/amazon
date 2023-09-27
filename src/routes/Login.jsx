import React, { useState } from 'react'
import amazon1 from '../Images/amazon-2-logo-svgrepo-com.svg'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className="mainContainer">
            <div className='logo'>
                <img src={amazon1} />
            </div>
            <div className='inputRegion w-1/4 py-10 flex items-center justify-center flex-col'>
                <div className='font-bold mb-4'>
                    Sign in
                </div>
                <TextInput label={"Email address or username"} placeholder={"Email address or Username"} className={"my-6"}
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput label={"Password"} placeholder={"Password"}
                    value={password}
                    setValue={setPassword}
                />
                <div className='w-full flex items-center justify-end my-10'>
                    <button className='bg-green-400 text-lg font-semibold p-3 w-full rounded-full'
                   
                    >
                        LOG IN
                    </button>
                </div>
                <div className='text-gray-500 w-full flex items-center justify-center py-3 font-bold'>
                <Link to={"/update"}>Forgot your password?</Link>
                    
                </div>
                <div className='w-full border border-solid border-gray-300'></div>
                <div className='my-6 font-semibold text-lg'>
                    Dont't have an account?
                </div>
                <div className='border border-gray-500 text-gray-500 w-full flex items-center justify-center py-3 rounded-full font-bold'>
                <Link to={"/signup"}>SIGN UP FOR SPOTIFY</Link>
                    
                </div>
            </div>
        </div>
  )
}

export default Login