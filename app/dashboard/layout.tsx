import { ReactNode } from "react";
import Sidebar from "../Sidebar";

export default function Layout({children}: {children: ReactNode}){
    return(
            <main className="md:lg:flex">
                <Sidebar />
                    <div className="w-full">
                       {children}
                    </div>
            </main>
    );
}