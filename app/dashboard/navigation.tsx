import { DigitalCurrency } from "@/types/Wallet"
import { bitcoinLogo, ethereumLogo } from "@/utils/svgLogos"

export const ethereum: DigitalCurrency = {
    name: 'Ethereum',
    abbreviation: "ETH",
    worthInDollars: 20000.2,
    logo: ethereumLogo,
    wallets: []
}
export const bitcoin: DigitalCurrency = {
    name: 'Bitcoin',
    abbreviation: "BTC",
    worthInDollars: 200230.2,
    logo: bitcoinLogo,
    wallets: []
}

export default function UpperNav(){
    const currencies = [ethereum, bitcoin]
    return(
        <nav className="flex sticky top-0 justify-around bg-slate-300 p-2">
            {currencies.map(currency => 
                <div className="flex">
                    <span className="h-5 mr-1">{currency.logo}</span>
                    <p className="font-bold">{currency.abbreviation}</p>
                    <p className="bg-blue-300 rounded-md mx-2 px-2">${currency.worthInDollars}</p>
                </div>    
            )}
        </nav>
    )
}