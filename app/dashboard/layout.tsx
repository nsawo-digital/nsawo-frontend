import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

export default function Layout(
    {currencies, wallets}: 
    {children: ReactNode, currencies: ReactNode, wallets: ReactNode}
    ){
    return(
            <main className="md:lg:flex bg-gradient-to-br from-green-200 via-white to-pink-200">
                <Sidebar />
                <div className="w-full">
                    {currencies}
                    {wallets}
                </div>
            </main>
    );
}