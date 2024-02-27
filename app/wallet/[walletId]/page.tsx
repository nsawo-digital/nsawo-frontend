'use client'
import { Transaction } from "@/types/Transaction";
import { useEffect, useState } from "react";
import { Wallet } from "@/types/Wallet";
import { apiClient } from "@/utils/axiosClientCustomizer";
import WithdrawCard from "./withdrawCard";
import DepositCard from "./depositCard";
import TransactionsTable from "./transactionsTable";


export default function Page({params}: {params: {walletId: string}}){

    const [limit, setLimit] = useState(10)
    const [offset, setOffset] = useState(0)
    const [wallet, setWallet] = useState<Wallet>()
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [message, setMessage] = useState('');
/*
    if(!wallet){
        return (
            <div>Wallet not reachable</div>
        )
    }
*/
    useEffect(() => {
            apiClient.get(`/wallet/${params.walletId}`)
                .then(r => {
                    setWallet(r.data)
                    console.log('ececuted: '+r.data)
                }).catch(e => {
                    console.error(e)
                    if(e.response)
                        setMessage(e.response.data.message)
                    else
                        setMessage('Failed to connect to backend server')
                })
    }, [params.walletId])

    console.log('wallet: ' + wallet)
    useEffect(() => {
        apiClient.get(`/transaction/byWallet/${params.walletId}/${limit}/${offset}`)
        .then(r => {
            console.log(r);
            setTransactions(r.data)
        }).catch(e => {
            console.error(e)
                    if(e.response)
                        setMessage(e.response.data.message)
                    else
                        setMessage('Failed to connect to backend server')
        })
    }, [offset, limit, params.walletId])

    return(
        <div>
            <div className="md:lg:flex justify-around">

            {wallet && <DepositCard wallet={wallet} />}
            {wallet && <WithdrawCard wallet={wallet} />}
            </div>
            {message}
            <TransactionsTable transactions={transactions} />
        </div>
    );
}