"use client"
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { fetchDigitalCurrencies, handleCreateWallet,  } from "./communicator";
import { useEffect, useState } from "react";
import { DigitalCurrency } from "@/types/Wallet";

export default function CreateWallet(){
    const formStatus = useFormStatus();
    const [digitalCurrencies, setDigitalCurrencies] = useState<DigitalCurrency[]>([])
    const [formMsg, formAction] = useFormState(handleCreateWallet, '')
    const fetched = fetchDigitalCurrencies()
    useEffect(() => {
        fetched.then(data =>
            setDigitalCurrencies(data)
        )
    }, [])

    return (
        <div className="flex justify-center text-white">
            <div className="flex justify-center">
                <section>
                    <div className="text-center text-3xl mx-2 mb-4 font-bold bg-gradient-to-r from-green-500 to-purple-500 inline-block text-transparent bg-clip-text">
                      Create new wallet
                    </div>

                <form className="px-6 py-8 rounded-lg bg-black/50 
                                backdrop-blur-md md:w-80 mx-2 md:mx-auto" 
                        action={formAction}>
                <div className="font-bold flex justify-center">Create wallet</div>
                    <div className="mt-4">
                        <div className="">
                            <label htmlFor="name">Wallet name: </label>
                        </div>
                        <div className="w-full">
                            <input type="text" 
                                    name="name"
                                    required
                                    placeholder="eg Wedding savings"
                                    className="rounded-md p-1 
                                            bg-slate-50/10 w-full"
                            />
                        </div>
                    </div>
  
                    <div className="mt-4">
                        <div className="">
                            <label htmlFor="currencyId">Currency: </label>
                        </div>
                        <div className="">
                           <select name="currencyId" className="rounded-md p-1 
                                            bg-slate-50/10 w-full" required
                            >
                                <option value=''>--Choose currency--</option>
                                {digitalCurrencies.map(currency => 
                                    <option value={currency.id}>{currency.name} {currency.abbreviation}</option>
                                )}
                           </select>
                        </div>
                    </div>
                    <p className="text-green-500">{formMsg}</p>
                    <div className="flex justify-between">
                        <button disabled={formStatus.pending} type="submit" className="bg-emerald-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                            {formStatus.pending ? 'Please wait...' : 'Submit'}
                        </button>
                    </div>
                </form>
                </section>
            </div>
        </div>
    );
}