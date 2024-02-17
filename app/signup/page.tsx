"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [repadtedPassword, setRepeatedPassword] = useState('');
  const [msg, setMsg] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if(password.length < 5){
        setMsg("You need a longer password")
    }else if(repadtedPassword !== password){
        setMsg("The 2 passwords dont match")
    }else{
        setMsg("")
    }
  }, [repadtedPassword, password])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
  };
  
  return (
      <div className="h-screen items-center flex justify-center bg-no-repeat bg-cover bg-[url('/loginbg.jpg')] text-white">
          <div className="flex justify-center my-auto">
              <section>
                  <div className="text-center text-3xl mb-4 font-bold text-slate-300 border-t-2 rounded-lg font-serif">NSAWO DIGITAL FINANCE</div>
              <form className="px-6 py-8 rounded-lg bg-black/50 
                              backdrop-blur-md w-80 mx-auto" 
                      onSubmit={ handleSubmit }>
              <div className="font-bold flex justify-center">Sign up</div>
                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="username">username: </label>
                      </div>
                      <div className="w-full">
                          <input type="text" 
                                  name="username"
                                  value={username}
                                  placeholder="eg Murife101"
                                  onChange={e => setUsername(e.target.value)} 
                                  className="rounded-md p-1 
                                          bg-slate-50/10 w-full"
                          />
                      </div>
                  </div>

                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="username">email: </label>
                      </div>
                      <div className="w-full">
                          <input type="email" 
                                  name="email"
                                  value={email}
                                  placeholder="eg yourmail@something.com"
                                  onChange={e => setEmail(e.target.value)} 
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

                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="password">Repeat Passsword: </label>
                      </div>
                      <div className="">
                          <input type="password" 
                                  name="repeatedPassword"  
                                  value={repadtedPassword}
                                  onChange={e => setRepeatedPassword(e.target.value)} 
                                  className="rounded-md p-1 
                                          bg-slate-50/20 w-full"
                          />
                      </div>
                  </div>
                  <div className="text-red-200"> {msg} </div>
                  <div className="flex justify-between">
                      <button type="submit" className="bg-emerald-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                          Submit
                      </button>
                      <Link href="/"
                          className="bg-blue-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                          Login
                      </Link>
                  </div>
              </form>
              </section>
          </div>
      </div>
  );
}
