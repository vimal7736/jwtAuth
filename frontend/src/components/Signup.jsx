import React, { useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import axios from 'axios';

function SignUp() {
const [signupInfo , setsignupInfo] = useState({
    name :"",
    email:"",
    password: "",
})

const [toastError , toastSuccess]= Toast()
console.log(signupInfo);



    const handleChange =(e)=>{
             const {name , value} = e.target;
             setsignupInfo({
                ...signupInfo,
                [name] : value
             })
    }

    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name , password, email } = signupInfo;
        if(!name){
            toastError("Name is required")
        }
        if(!password){
            toastError("Password is required")
        }
        if(!email){
            toastError("Email is required")
        }

        try {
            const url = "https://jwt-auth-api-murex.vercel.app/auth/signup"
            const response = await axios.post(url,signupInfo,{
                headers:{
                    'Content-Type': 'application/json',
                },
            })
            if(response.data.success){
                toastSuccess(response.data.message)
            } 
            console.log(response,'qwer');
            
            
        } catch (error) {

            if(error){
                const errMessage = error?.response?.data?.error?.details[0].message || "Something went wrong"
                toastError(errMessage,'error')
            }
            
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-4xl font-extrabold leading-9 tracking-tight text-white drop-shadow-md animate-fade-in">Create your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/50 p-6 rounded-lg shadow-lg backdrop-blur-md animate-slide-in">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">Full Name</label>
                        <div className="mt-2">
                            <input

                                id="name"
                                onChange={handleChange}
                                name="name"
                                type="text"
                                autoComplete="name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email"
                                onChange={handleChange}
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}

                                autoComplete="new-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md animate-gradient bg-gradient-to-r from-cyan-700 to-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-l hover:from-cyan-800 hover:to-black transition duration-300 ease-in-out transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-white">
                    Already have an account?
                    <Link to={"/login"} className="font-semibold leading-6 text-indigo-200  hover:text-indigo-400">Sign In</Link>
                </p>
            </div>
            <Toaster/>
        </div>
    );
}

export default SignUp;
