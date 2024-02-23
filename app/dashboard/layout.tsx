import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import UpperNav from "./navigation";

export default function Layout(
    {children, create, wallets}:
    {children: ReactNode, create: ReactNode, wallets: ReactNode}
    ){
    return(
            <main className="md:lg:flex bg-white">
                <Sidebar />
                <div className="w-full">
                    <UpperNav />
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 p-2">
                        {/*children*/}
                        {wallets}
                        {create}
                    </div>
                </div>
            </main>
    );
}