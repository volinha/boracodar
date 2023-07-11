'use client'

import { Outfit } from "next/font/google"
import num from './assets/number.svg'
import Image from "next/image"

import './style.css'

import { useRouter } from "next/navigation"
import Link from "next/link"

const outfit = Outfit({ subsets: ['latin'] })

export default function Page() {

    const router = useRouter()

    return (
        <div className={`${outfit.className}  p-4 md:p-12 gap-10 bg-[#000013] w-screen h-screen text-white grid grid-cols-1 md:grid-cols-2 items-center justify-center`}>
            <div className="md:order-2 justify-center p-6 gap-0 md:gap-2 items-center inline-flex drop-shadow-404">
                <Image src={num} alt="number" width={80} height={80} className="md:w-full w-2/3"/>
                <iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json" width={230} height={230} className="md:w-full w-2/3"></iframe>
                <Image src={num} alt="number" width={80} height={80} className="md:w-full w-2/3"/>
            </div>
            <div className="md:order-1 p-3 w-5/6">
                <h1 className="text-3xl p-3 font-bold">Ops, esta página não foi encontrada</h1>
                <h3 className="p-3 text-[#D6D6F2]">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</h3>
                <div className="flex gap-3 p-3 text-sm">
                    <button onClick={() => router.back()} className="bg-[#151557] hover:bg-[#212187] transition-all p-4 rounded-full uppercase">Voltar</button>
                    <Link href="/" className="bg-[#151557] hover:bg-[#212187] transition-all p-4 rounded-full uppercase">Ir para a home</Link>
                </div>
            </div>
        </div>
    )
}