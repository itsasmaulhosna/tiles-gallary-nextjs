'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Loginpage = () => {
    const [isShow, setShow] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    
    const handleLogin = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/' 
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            alert("Login Successful!");
        }
    };


    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 mt-10'>
            
            <div className='p-10 rounded-xl bg-white w-[350px] shadow-lg'>
                
                <h2 className='text-3xl font-bold text-center mb-6'>
                    Login Your Account
                </h2>

                
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-2 w-full border py-2 rounded-lg mb-4 hover:bg-gray-100 text-blue-400 font-bold"
                >
                    <FaGoogle />
                    Continue with Google
                </button>

                
                <div className="text-center text-sm text-gray-400 mb-4">
                    OR
                </div>

                
                <form className='space-y-5' onSubmit={handleSubmit(handleLogin)}>

                    <fieldset>
                        <legend>Email Address</legend>
                        <input
                            type="email"
                            className="input w-full"
                            {...register("email", { required: 'Email is required' })}
                            placeholder="Enter Your Email"
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="relative">
                        <legend>Password</legend>
                        <input
                            type={isShow ? "text" : "password"}
                            {...register("password", { required: 'Password is required' })}
                            className="input w-full"
                            placeholder="Enter Password"
                        />

                        <span
                            className='absolute top-3 right-5 cursor-pointer'
                            onClick={() => setShow(!isShow)}
                        >
                            {isShow ? <FaEye /> : <FaEyeSlash />}
                        </span>

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="w-full bg-slate-800 text-white py-2 rounded-lg">
                        Login
                    </button>
                </form>

                <p className='mt-4 text-center text-sm'>
                    Don't have an account?{" "}
                    <Link href='/register' className='text-blue-500'>
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Loginpage;