
import { Wallet } from "@/types/Wallet"
import { bitcoinLogo, ethereumLogo } from "@/utils/svgLogos"
import { getWallets } from "./communicator";


export default async function Wallets(){
    const wallets = await getWallets();
    return(
        <div>
        <h5 className="text-2xl font-light text-purple-500 text-center font-sans">Your wallets</h5>
        {wallets.length > 0 ? 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {wallets.map(wallet => <WalletCard key={wallet.id} item={wallet} />)}
        </div>
        :
        <div className="text-center text-base text-red-700">
            No wallets created yet
        </div>
        }
        </div>
    )
}

export function WalletCard({item}: {item: Wallet}){
    return(
    <div className="max-w-sm p-6 bg-gradient-to-br from-purple-600 to-emerald-500 border border-gray-200 rounded-lg shadow">
        <div className="h-10">{item.digitalCurrency.abbreviation === 'ETH'? ethereumLogo : bitcoinLogo}</div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-50">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-300 ">
            {item.digitalCurrency.abbreviation} : {item.balance}
        </p>
        <p className="mb-3 font-normal text-gray-200 ">
            ${item.digitalCurrency.worthInDollars * item.balance}
        </p>
        <a href={`/wallet/${item.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    
    )
}