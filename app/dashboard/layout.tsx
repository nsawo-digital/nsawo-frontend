import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import UpperNav from "./navigation";

export default function Layout(
    {children, create, wallets}:
    {children: ReactNode, create: ReactNode, wallets: ReactNode}
    ){
    return(
            <main className="md:lg:flex bg-gradient-to-br from-green-200 via-white to-pink-200">
                <Sidebar />
                <div className="w-full">
                    <UpperNav />
                    <div className="w-full grid grid-cols-2">
                        {children}
                        {wallets}
                        {create}
                    </div>
                </div>
            </main>
    );
}