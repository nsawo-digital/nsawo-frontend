'use client'
import { Wallet } from "@/types/Wallet"
import { convertFromCrypto, convertToCrypto } from "@/utils/conversion"
import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { deposit } from "./communicator"

export default function DepositCard({wallet}: {wallet: Wallet}){
    const [amountInDollars, setAmountInDollars] = useState<number>()
    const [amountInCrypto, setAmountInCrypto] = useState<number>()
    const [walletBalance, setWalletBalance] = useState<number>(0)
    const [hidden, setHidden] = useState<boolean>(true)

    const formStatus = useFormStatus();
    const [formMsg, formAction] = useFormState(deposit, '')
    
    if(!wallet.id){
        return(
            <div>Wallet not reachable</div>
        )
    }

    const handleCryptoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)

        setAmountInCrypto(value)
        setAmountInDollars(convertFromCrypto(value, wallet))

        setWalletBalance(Number(wallet.balance) + value)
    }

    const handleDollarInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)

        setAmountInDollars(value)
        setAmountInCrypto(convertToCrypto(value, wallet))

        setWalletBalance(Number(wallet.balance) + convertToCrypto(value, wallet))
    }


  return (
    <div className="flex justify-center text-white">
    <div className="flex justify-center">
        <section>
        <form className="px-6 py-8 rounded-lg bg-black/50 
                        backdrop-blur-md md:w-80 mx-2 md:mx-auto" 
                action={formAction}>
        <div className="font-bold flex justify-center cursor-pointer" onClick={() => setHidden(!hidden)}>Deposit</div>
            <div className="mt-4" hidden={hidden}>
                <div className="">
                    <label htmlFor="amountInDollars">Amount in Dollars: </label>
                </div>

                <input type="hidden" value={wallet.id} name="walletId" />

                <div className="w-full">
                    <input type="number" 
                            name="amountInDollars"
                            required
                            value={amountInDollars}
                            onChange={e => handleDollarInputChange(e)}
                            className="rounded-md p-1 
                                    bg-slate-50/10 w-full"
                    />
                </div>
            </div>

            <div className="mt-4" hidden={hidden}>
                <div className="">
                    <label htmlFor="amount">Amount in {wallet.digitalCurrency.name}: </label>
                </div>
                <div className="w-full">
                    <input type="number" 
                            name="amount"
                            required
                            value={amountInCrypto}
                            onChange={e => handleCryptoInputChange(e)}
                            className="rounded-md p-1 
                                    bg-slate-50/10 w-full"
                    />
                </div>
            </div>

            <div className="mt-4" hidden={hidden}>
                <div className="">
                    <label htmlFor="amount">Balance: </label>
                </div>
                <div className="w-full">
                    <p className="text-xl">{wallet.digitalCurrency.abbreviation}: {walletBalance}</p>
                    <p className="text-xl">${convertFromCrypto(walletBalance, wallet)}</p>
                </div>
            </div>

            <p className="text-green-500" hidden={hidden}>{formMsg}</p>
            <div className="flex justify-between" hidden={hidden}>
                <button hidden={hidden} disabled={formStatus.pending} type="submit" className="bg-emerald-500 text-white font-light shadow-md ring-1 ring-gray-400 px-6 rounded-lg my-4">
                    {formStatus.pending ? 'Please wait...' : 'Submit'}
                </button>
            </div>
        </form>
        </section>
    </div>
</div>
  );
}


