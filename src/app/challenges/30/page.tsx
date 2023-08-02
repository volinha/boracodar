'use client'

import { Outfit } from "next/font/google";
import MovieCard from "./Components/MovieCard";

import Logo from "./assets/Logo.png";
import Image from "next/image";
import { Lightning } from "@phosphor-icons/react";

const outfit = Outfit({ subsets: ["latin"] })

export default function Page() {
    return (
        <main className={`${outfit.className} min-h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#8323FF] to-[#FF2DAF]`}>
            <div className="bg-[#1E1F28] h-full px-24 py-16 rounded-2xl flex flex-col items-center justify-center gap-9 border-8 border-[#C529D5] shadow-[0px_-3px_22px_0px_rgba(0,0,0,0.35)]">
                <div className="text-white flex w-full items-center justify-between">
                    <div><Image src={Logo} alt="Logo" width={100} height={100} /></div>
                    <button className="flex items-center justify-center gap-2 rounded-sm px-4 py-2 bg-gradient-to-r from-[#8323FF]/80 to-[#FF2DAF]/80 hover:from-[#8323FF] hover:to-[#FF2DAF] transition-colors duration-300">
                        <span>Nova recomendação</span>
                        <Lightning size={32} color="#fef6f6" className="bg-white/50 rounded-full p-2" />
                    </button>
                </div>
                <div className="flex gap-9">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </main>
    )
}