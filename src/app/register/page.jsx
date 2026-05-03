'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    
    const [isShow, setShow] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleRegister = async (data) => {
        const { name, photo, email, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: '/login' 
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            alert('Signup successfully');

            
            router.push('/login');
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='text-3xl font-bold text-center mb-4'>Create Your Account</h2>

                <form className='space-y-5' onSubmit={handleSubmit(handleRegister)}>


                    <fieldset>
                        <legend>Name</legend>
                        <input
                            type="text"
                            className="input w-full"
                            {...register("name", { required: 'Name is required' })}
                            placeholder="Enter Your Name"
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>


                    <fieldset>
                        <legend>Photo URL</legend>
                        <input
                            type="text"
                            className="input w-full"
                            {...register("photo", { required: 'Photo is required' })}
                            placeholder="Enter Photo URL"
                        />
                    </fieldset>

                    
                    <fieldset>
                        <legend>Email</legend>
                        <input
                            type="email"
                            className="input w-full"
                            {...register("email", { required: 'Email is required' })}
                            placeholder="Enter Email"
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    
                    <fieldset className="relative">
                        <legend>Password</legend>
                        <input
                            type={isShow ? "text" : "password"}
                            className="input w-full"
                            {...register("password", { required: 'Password is required' })}
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

                    
                    <button
                        type="submit"
                        className="btn w-full bg-slate-800 text-white mt-4 rounded-md"
                    >
                        Register
                    </button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;