    import React, { useContext, useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import Toast from './Toast';
    import { Toaster } from 'react-hot-toast';
    import axios from 'axios';

    function Login() {
        const [toastError, toastSuccess] = Toast();
        const [infoData, setInfoData]= useState();
        console.log(infoData,'1234567');
        
        const [logoinInfo, setLoginInfo] = useState({
            email: "",
            password: "",
        })
        const navigate = useNavigate();
        



        const handleChange = (e) => {
            const { name, value } = e.target;
            setLoginInfo({
                ...logoinInfo,
                [name]: value
            })
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            const { email, password } = logoinInfo;
            if (!email || !password) {
                toastError('Email and Pasword required')
            }
            const url = "http://localhost:8080/auth/login";

            try {
                const response = await axios.post(url, logoinInfo, {
                    header: {
                        'Content-Type': 'application/json',
                    }
                })
                console.log(response);
                
                const {email , jwtToken , message , name , success} = response.data
                localStorage.setItem('token',jwtToken);
                localStorage.setItem('loggedInUser',name);
                localStorage.setItem('email',email);
                
                if (success && jwtToken) {
                    toastSuccess(message)
                    setTimeout(()=>{
                        navigate('/',  {state:  {data:response.data} }); 

                    },2000)
                }
                

            } catch (error) {
                const errMessage = error?.response?.data?.message || "Something went wrong"
                toastError(errMessage)
            }



        }



        return (
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-white drop-shadow-md animate-fade-in">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white/50 p-6 rounded-lg shadow-lg backdrop-blur-md animate-slide-in">
                    <form className="space-y-6" onSubmit={handleSubmit} action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-100 hover:text-indigo-400">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={handleChange}

                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md animate-gradient bg-gradient-to-r from-cyan-700 to-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-l hover:from-black hover:to-cyan-900 transition duration-300 ease-in-out transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-white">
                        Not a member?
                        <Link to="/signup" className="font-semibold leading-6 text-indigo-200 hover:text-indigo-400">Sign Up</Link>
                    </p>
                </div>
                <Toaster />
            </div>
        );
    }

    export default Login;
