'use server'

import { Wallet } from "@/types/Wallet"
import { getAuthUser } from "@/utils/authContext";
import { api } from "@/utils/axiosCustomizer"

export async function getWallets(): Promise<Wallet[]>{
    const userId = (await getAuthUser()).id
    
    let wallets: Wallet[] = [];
    if(!userId) return wallets;

    await api.get('/user/wallets/' + userId)
    .then(r => {
        console.log(r)
        wallets = r.data;
    }).catch(e => {
        console.error(e.response)
    })

    return wallets;
}