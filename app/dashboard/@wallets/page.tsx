import { Wallet } from "@/types/Wallet"
import Link from "next/link"
import { bitcoin, ethereum } from "../navigation"

export default function Wallets(){
    return(
        <div>
        <h5 className="text-2xl font-light text-purple-500 text-center font-sans">Your wallets</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {mockWallets.map(wallet => <WalletCard item={wallet} />)}
        </div>
        </div>
    )
}

function WalletCard({item}: {item: Wallet}){
    return(
    <div className="max-w-sm p-6 bg-gradient-to-br from-purple-600 to-emerald-500 border border-gray-200 rounded-lg shadow">
        <div className="h-10">{item.digitalCurrency.logo}</div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-50">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-300 ">
            {item.digitalCurrency.abbreviation} : {item.balance}
        </p>
        <p className="mb-3 font-normal text-gray-200 ">
            ${item.digitalCurrency.worthInDollars * item.balance}
        </p>
        <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
    
    )
}

const mockWallets: Wallet[] = [
    {
        name: "Shatta",
        balance: 43.44,
        digitalCurrency: bitcoin
    },
    {
        name: "Savings",
        balance: 2.4,
        digitalCurrency: ethereum
    }
]