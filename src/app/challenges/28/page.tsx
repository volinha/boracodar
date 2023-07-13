'use client'

import { MagicWand } from "@phosphor-icons/react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmplex = IBM_Plex_Sans({ weight: ["400","600","700"], subsets: ["latin"]})

export default function Page(){
    return (
    <div className={`${ibmplex.className} w-screen h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400`}>
        <div className="w-5/6 h-5/6 overflow-hidden rounded-2xl bg-[#020617]/80">
            <div className="flex flex-col gap-4 items-center justify-center m-14">
                <MagicWand size={40} color="#fef6f6" className="p-2 bg-[#020617]/90 rounded-lg"/>
                <h1 className="text-white font-bold">Experimente o poder da Inteligência Artificial</h1>
            </div>
        </div>
    </div>
    )
}