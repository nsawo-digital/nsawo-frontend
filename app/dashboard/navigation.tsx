import { DigitalCurrency } from "@/types/Wallet"
import { getAuthUser } from "@/utils/authContext"
import logos from "@/utils/svgLogos";
import { fetchDigitalCurrencies } from "./@create/communicator";

export const ethereum: DigitalCurrency = {
    name: 'Ethereum',
    abbreviation: "ETH",
    worthInDollars: 20000.2,
    picture: logos.get('ETH'),
    wallets: []
}
export const bitcoin: DigitalCurrency = {
    name: 'Bitcoin',
    abbreviation: "BTC",
    worthInDollars: 200230.2,
    picture: logos.get('BTC'),
    wallets: []
}

export default async function UpperNav(){
    const authUser = await getAuthUser();
    const fetched = await fetchDigitalCurrencies()

    const currencies = fetched;
    return(
        <nav className="flex sticky top-0 justify-around bg-black/20 backdrop-blur-md p-2 z-10">
            {currencies.map(currency => 
                <div key={currency.id} className="flex">
                    <span className="h-5 mr-1">{logos.get(currency.abbreviation)}</span>
                    <p className="font-bold">{currency.abbreviation}</p>
                    <p className="bg-blue-300 rounded-md mx-2 px-2">&#36{currency.worthInDollars}</p>
                </div>    
            )}
            <p className="font-bold text-green-500">{authUser.username}</p>
        </nav>
    )
}

