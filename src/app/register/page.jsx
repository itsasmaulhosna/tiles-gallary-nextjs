'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const[isShow,setShow]=useState(false)
    const {register,watch,
    handleSubmit,formState:{errors}}=useForm()
    const handleRegister=async(data)=>{
        console.log(data)
        const {name,photo,email,password}=data;
        console.log(name,photo,email,password)

        const {data:res,error}=await authClient.signUp.email({
            name: name,
    email: email,
    password: password,
    image: photo,
    callbackURL: '/'

        })
        console.log(res,error)
        if(error){
            alert(error.message)
        }
        if(res){
            alert('Signup successfully')
        }

    }
    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
            <div className='p-10 rounded-xl bg-white '>
                <h2 className='text-3xl font-bold text-center mb-4 '>Login Your Account</h2>
                <form className='space-y-5' onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" className="input" {...register("name",{ required: 'Name field is Required' })}  placeholder="Enter Your Name" />
{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" className="input" {...register("photo",{ required: 'Photo field is Required' })}  placeholder="Type here photo url" />
{errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
</fieldset>
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email Address</legend>
  <input type="text" className="input" {...register("email",{ required: 'Email field is Required' })}  placeholder="Enter Your Email Address" />
{errors.password && <p className='text-red-500'>{errors.email.message}</p>}
</fieldset>
<fieldset className="fieldset relative">
  <legend className="fieldset-legend">Password</legend>
  <input type={isShow? "text" :"password"} {...register("password",{ required: 'Password field is Required' })}  className="input" placeholder="Enter Your Password" />
  <span className='absolute top-3 right-5' onClick={()=>setShow(!isShow)}>
      {isShow? <FaEye/> : <FaEyeSlash/>}
    </span>
  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

</fieldset>
<Link href={'/login'}>
<button className="btn w-full bg-slate-800 text-white mt-4">Register</button>
</Link>
                </form>
                
            </div>
        </div>
    );
};

export default RegisterPage;