import Image from "next/image";

export default function Loading(){
    return(
        <div className="h-screen items-center flex justify-center bg-no-repeat bg-cover bg-[url('/loginbg.jpg')] backdrop-blur-lg text-white">
        <div className="flex justify-center my-auto">
            <section>
                <Image src='/loginbg.png' alt={'loading image'} width={500} height={500} className="rounded-lg"/>
                <div className="text-center text-3xl mb-4 font-bold text-slate-300 border-t-2 rounded-lg font-serif">
                  NSAWO DIGITAL WALLET 
                </div>
            </section>
        </div>
    </div>
    )
}