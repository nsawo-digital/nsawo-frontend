"use client"
import Link from "next/link";
import { handleLogin } from "./communicator";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";

export default function Login() {
    const formStatus = useFormStatus();
    const [formMsg, formAction] = useFormState(handleLogin, '')

  return (
      <div className="h-screen items-center flex justify-center bg-no-repeat bg-cover bg-[url('/loginbg.jpg')] text-white">
          <div className="flex justify-center my-auto">
              <section>
                  <div className="text-center text-3xl mb-4 font-bold text-slate-300 border-t-2 rounded-lg font-serif">
                    NSAWO DIGITAL WALLET 
                  </div>
              <form className="px-6 py-8 rounded-lg bg-black/50 
                              backdrop-blur-md w-80 mx-auto" 
                      action={formAction}>
              <div className="font-bold flex justify-center">Login</div>
                  <div className="mt-4">
                      <div className="">
                          <label htmlFor="username">username: </label>
                      </div>
                      <div className="w-full">
                          <input type="text" 
                                  name="username"
                                  required
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
                                  required
                                  className="rounded-md p-1 
                                          bg-slate-50/20 w-full"
                          />
                      </div>
                  </div>
                  <div className="text-red-700"> {formMsg} </div>
                  <div className="flex justify-between">
                      <button disabled={formStatus.pending} type="submit" className="bg-emerald-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                          {formStatus.pending ? 'Please wait...' : 'Login'}
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
