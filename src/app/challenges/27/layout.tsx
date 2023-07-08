import { Outfit } from "next/font/google"
import num from './assets/number.svg'
import Image from "next/image"

import './style.css'

const outfit = Outfit({ subsets: ['latin'] })

export default function Page() {
    return (
        <div className={`${outfit.className} p-12 bg-[#000013] w-screen h-screen text-white grid grid-cols-2 items-center justify-center`}>
            <div className="p-3 w-5/6">
                <h1 className="text-3xl p-3 font-bold">Ops, esta página não foi encontrada</h1>
                <h3 className="p-3 text-[#D6D6F2]">Parece que você se perdeu... Tente voltar para a página anterior ou acessar a home.</h3>
                <div className="flex gap-3 p-3 text-sm">
                    <button className="bg-[#151557] hover:bg-[#212187] transition-all p-4 rounded-full uppercase">Voltar</button>
                    <button className="bg-[#151557] hover:bg-[#212187] transition-all p-4 rounded-full uppercase">Ir para a home</button>
                </div>
            </div>
            <div className="justify-center gap-2 items-center inline-flex drop-shadow-404">
                <Image src={num} alt="number" width={80} height={80} className="bg-transparent"/>
                <iframe src="https://lottie.host/?file=ab7a5c4d-d0de-4877-be5e-8cffedab2bf1/f7kJBYBWYz.json" width={230} height={230}></iframe>
                <Image src={num} alt="number" width={80} height={80}/>
            </div>
        </div>
    )
}