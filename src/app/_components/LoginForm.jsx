"use client";
import { signIn } from 'next-auth/react';


export default function LoginForm() {
    return (
        <div className="w-full ">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full h-auto dark:bg-black dark:text-white">
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-black text-sm font-bold mb-2 dark:bg-black dark:text-white">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            className="font-semibold shadow appearance-none rounded-lg bg-slate-200 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline dark:bg-light-dark"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-black text-sm font-bold mb-2 dark:bg-black dark:text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            className="font-semibold shadow appearance-none rounded-lg bg-slate-200 w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-light-dark"
                        />
                    </div>
                </form>
                <div className='mb-4'>
                    <a className="inline-block align-baseline font-bold text-sm text-purple">
                        Forgot password?
                    </a>
                </div>
                <div className="flex items-center justify-between">
                    <a href='/upload' className="bg-purple text-white font-bold py-2 px-4 rounded-lg w-full flex justify-center">
                        Sign In
                    </a>
                </div>
            </div>
            <div>
                <div className="text-center text-gray-500 text-md mt-9">
                    Don’t have an account? <a href="#" className="text-blue-500">Register here</a>
                </div>
            </div>
        </div>
    );
}
