'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Loginpage = () => {
    const[isShow,setShow]=useState(false)
    const {register,watch,
    handleSubmit,formState:{errors}}=useForm()
    const handleLogin=async(data)=>{
        console.log(data)

        const { data:res, error } = await authClient.signIn.email({
    email: data.email,
    password: data.password,
    rememberMe: true,
    callbackURL: '/'
});
console.log(res,error)

    }
    console.log(watch("email"))
    console.log(watch("password"))
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100  '>
            <div className='p-15 rounded-xl bg-white space-y-5'>
                <h2 className='text-3xl font-bold text-center mb-10'>Login Your Account</h2>
                <form className='space-y-8' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Address</legend>
  <input type="text" className="input" {...register("email",{ required: 'Email field is Required' })}  placeholder="Enter Your Email Address" />
{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>
<fieldset className="fieldset relative">
  <legend className="fieldset-legend ">Password</legend>
  <input type={isShow? "text" :"password"} {...register("password",{ required: 'Password field is Required' })}  className="input" placeholder="Enter Your Password" />
  <span className='absolute top-3 right-5' onClick={()=>setShow(!isShow)}>
    {isShow? <FaEye/> : <FaEyeSlash/>}
  </span>
  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

</fieldset>

<button className="btn w-full bg-slate-800 text-white mt-4 rounded-xl p-2">Login</button>
                </form>
                <p className='mt-4'>
                    Don't have an account? {" "}
                    <Link href ={'/register'} className='text-blue-500'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Loginpage;