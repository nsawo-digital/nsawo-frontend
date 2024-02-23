'use server'
import { DigitalCurrency } from "@/types/Wallet";
import { getAuthUser } from "@/utils/authContext";
import { api } from "@/utils/axiosCustomizer"

export async function handleCreateWallet(intial: string, formdata: FormData) {
    const userId = (await getAuthUser()).id
    if(!userId) return 'Please login first';

    const item = {name: formdata.get('name'), currencyId: formdata.get('currencyId')}
    
    let message = 'Not submitted'; 
    await api.post('/user/wallet/' + userId, item)
    .then(r => {
        console.log(r)
        message = 'Created succesfully';
    }).catch(e => {
        message = e.response.data.message
        console.error(message)
    })
    return message
}

export async function fetchDigitalCurrencies(){
    let items: DigitalCurrency[] = [{name: '', abbreviation: '', worthInDollars: 0, wallets: []}]
    await api.get('/digital-currency')
    .then(r => {
        items = r.data;
        return items;
    }).catch(e => {
        console.error(e)
    });
    return items;
}