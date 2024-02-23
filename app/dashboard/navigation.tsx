import { DigitalCurrency } from "@/types/Wallet"
import { getAuthUser, getSession } from "@/utils/authContext"
import { bitcoinLogo, ethereumLogo } from "@/utils/svgLogos"

export const ethereum: DigitalCurrency = {
    name: 'Ethereum',
    abbreviation: "ETH",
    worthInDollars: 20000.2,
    picture: ethereumLogo,
    wallets: []
}
export const bitcoin: DigitalCurrency = {
    name: 'Bitcoin',
    abbreviation: "BTC",
    worthInDollars: 200230.2,
    picture: bitcoinLogo,
    wallets: []
}

export default async function UpperNav(){
    const authUser = await getAuthUser();

    const currencies = [ethereum, bitcoin]
    return(
        <nav className="flex sticky top-0 justify-around bg-black/20 backdrop-blur-md p-2 z-10">
            {currencies.map(currency => 
                <div className="flex">
                    <span className="h-5 mr-1">{currency.picture}</span>
                    <p className="font-bold">{currency.abbreviation}</p>
                    <p className="bg-blue-300 rounded-md mx-2 px-2">${currency.worthInDollars}</p>
                </div>    
            )}
            <p className="font-bold text-green-500">{authUser.username}</p>
        </nav>
    )
}

