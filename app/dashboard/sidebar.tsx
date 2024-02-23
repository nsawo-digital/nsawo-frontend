"use client"
import { useState } from "react";
import { NavLink } from "@/types/NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { handleLogout } from "../login/communicator";

//media query in javascript to handle sidebar collapse on different screens
const phoneWindowSize = window.matchMedia("(max-width: 700px)");

const bars_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>


export default function Sidebar(){
    const [hidden, setHidden] = useState(phoneWindowSize.matches);
    const imgUrl = "/app-logo.jpeg";

    const links: NavLink[] = [

    ]

    const links2: NavLink[] = [
        {pathName: '#', name: 'Profile'},
    ]

    return(
        <div className='print:hidden bg-green-300 backdrop-blur-md
                        md:lg:min-h-screen p-4 w-full md:lg:w-60 
                        border-x-slate-700 overscroll-contain min-w-[300px]
                        sticky -bottom-0
        '>
            {phoneWindowSize.matches &&
            <button onClick={() => setHidden(!hidden)} className="-ml-0">
                {bars_icon}
            </button>
            }
            <img  hidden={hidden} src={imgUrl} className="rounded-full w-1/3 mx-auto mb-4" alt="logo" />
            <div className="text-lg font-bold text-center text-green-700">Nsawo Digital Wallet</div>
            <nav hidden={hidden} className="text-white rounded-md overscroll-contain sticky top-0 bg-black/20 p-3 min-h-[300px]">
                <ul className="divide-y divide-gray-50">
                    <div className="">
                        {links.map(li => 
                            <LinkItem l={li} key={li.name}/>
                        )}
                    </div>
                    <div className="mt-4">
                        {links2.map(li => 
                            <LinkItem l={li} key={li.name}/>
                        )}
                        <button type="button" className="p-2 rounded-lg bg-emerald-700/50 ring-1 ring-green-900 text-white" 
                        onClick={() => { handleLogout()}}>
                            Logout
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
}


interface linkProps {
    l: NavLink
}
function LinkItem({l}: linkProps){
    const right = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
    const down = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

    const [hidden, setHidden] = useState('hidden');
    const current = usePathname();
    const [caret, setCaret] = useState(right);
  
    return(
        <li key={l.name} className={`border-slate-900 rounded-md`}
        onClick={() => {setHidden(hidden === '' ? 'hidden' : ''); setCaret(hidden === '' ? right : down)}}
        >
            {l.sublinks ?
                <span className="cursor-pointer">
                    <span className={`flex justify-between p-2 hover:bg-slate-200/20 rounded-md ${current.includes(l.pathName) && 'border-b-2'}`}>
                        {l.name}
                        {caret}
                    </span>
                <ul className={`ml-4 w-full font-light ${hidden}`}>
                    {l.sublinks.map(sl =>
                        <li className="w-full" key={sl.name}>
                            <Link className="hover:bg-slate-200/20 rounded-md px-3 w-full p-2" href={sl.pathName}>{sl.name}</Link>
                        </li>
                    )}
                </ul>
              </span>
            :
            <Link className={`flex justify-between hover:bg-slate-200/20 p-2 rounded-md ${current.includes(l.pathName) && 'border-b-2'}`}
                href={l.pathName}>
                {l.name}
            </Link>
            }
        </li>
    );
}
