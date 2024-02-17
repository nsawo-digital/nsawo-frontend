"use client"
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect("/dashboard")
  };
  
  return (
      <div className="h-screen items-center flex justify-center bg-no-repeat bg-cover bg-[url('/loginbg.jpg')] text-white">
          <div className="flex justify-center my-auto">
              <section>
                  <div className="text-center text-3xl mb-4 font-bold text-slate-300 border-t-2 rounded-lg font-serif">
                    NSAWO DIGITAL WALLET 
                  </div>
              <form className="px-6 py-8 rounded-lg bg-black/50 
                              backdrop-blur-md w-80 mx-auto" 
                      onSubmit={e => handleSubmit(e) }>
              <div className="font-bold flex justify-center">Login</div>
                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="username">username: </label>
                      </div>
                      <div className="w-full">
                          <input type="text" 
                                  name="username"
                                  value={username}
                                  onChange={e => setUsername(e.target.value)} 
                                  className="rounded-md p-1 
                                          bg-slate-50/10 w-full"
                          />
                      </div>
                  </div>

                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="password">Passsword: </label>
                      </div>
                      <div className="">
                          <input type="password" 
                                  name="password"  
                                  value={password}
                                  onChange={e => setPassword(e.target.value)} 
                                  className="rounded-md p-1 
                                          bg-slate-50/20 w-full"
                          />
                      </div>
                  </div>
                  <div className="text-red-700"> {loginErr} </div>
                  <div className="flex justify-between">
                      <button type="submit" className="bg-emerald-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                          Login
                      </button>
                      <Link href="/signup"
                          className="bg-blue-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                          Signup
                      </Link>
                  </div>
              </form>
              </section>
          </div>
      </div>
  );
}
