'use server'
import { Transaction } from "@/types/Transaction"
import { api } from "@/utils/axiosCustomizer";

interface MyResponse {data?: any, message: string}

export async function getWalletTransactions(walletId: string, limit: number, offset: number): Promise<Transaction[]>{
    let transactions: Transaction[] = [];

    await api.get(`/transaction/byWallet/${walletId}/${limit}/${offset}`)
    .then(r => {
        console.log(r.data);
        transactions = r.data;
    }).catch(e => {
        console.error(e);
    })
    return transactions
}

//this amount is in crypto
export async function deposit(intialstate: string, formData: FormData) {
    const amount = formData.get('amount');
    const walletId = formData.get('walletId');
    let response = ''
    await api.post(`wallet/deposit/${walletId}`, {amount: amount})
    .then(r => {
        console.log(r.data)
        response = "Deposited succesfully"
    }).catch(e => {
        console.error(e)
        response = e.response ? e.response.data.message : 'Failed to connect';
    })
    return response;
}

//this amount is in crypto
export async function withdraw(intialstate: string, formData: FormData) {
    const walletId = formData.get('walletId');
    const amount = formData.get('amount')
    const password = formData.get('password')
    let response= ''
    if(!password) return "Password Not provided"

    await api.post(`wallet/withdraw/${walletId}`, {amount: amount, password: password})
    .then(r => {
        console.log(r.data)
        response = "Withdrawn succesfully"
    }).catch(e => {
        console.error(e)
        response = e.response ? e.response.data.message : 'Failed to connect';
    })
    return response;
}