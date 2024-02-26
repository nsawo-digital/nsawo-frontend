import Sidebar from "@/app/dashboard/sidebar";
import React, { ReactNode } from "react";

export default function Layout(
    {children}: {children: ReactNode}
){
    return(
        <div className="md:lg:flex">
            <Sidebar />
                <div className="w-full">
                    {children}
                </div>
        </div>
    )
}
