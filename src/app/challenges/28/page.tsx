'use client'

import { ArrowRight, Code, ImageSquare, MagicWand, MusicNotes, PaperPlaneRight, PlayCircle, PlusCircle } from "@phosphor-icons/react";
import { IBM_Plex_Sans } from "next/font/google";

const ibmplex = IBM_Plex_Sans({ weight: ["400", "600", "700"], subsets: ["latin"] })

export default function Page() {
    return (
        <div className={`${ibmplex.className} w-screen h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400`}>
            <div className="flex items-center flex-col justify-center w-5/6 h-5/6 overflow-hidden rounded-2xl bg-[#020617]/80">
                <div className="flex flex-col gap-4 items-center justify-center m-14 w-2/4">
                    <MagicWand size={40} color="#fef6f6" className="p-2 bg-[#020617]/90 rounded-lg" />
                    <h1 className="text-white font-bold text-2xl">Experimente o poder da Inteligência Artificial</h1>
                    <div className="flex flex-col gap-4 w-full pt-10">
                        <div className="border-1 border-white/20 rounded-xl bg-[#020617]/90 w-full p-4 text-white flex items-center justify-between">
                            <Code size={40} color="#fef6f6" className="p-2 bg-transparent border-1 border-white/20 rounded-lg" />
                            <span className="flex-1 px-2">Gerador de códigos</span>
                            <ArrowRight size={40} color="#fef6f6" className="p-2" />
                        </div>
                        <div className="border-1 border-white/20 rounded-xl bg-[#020617]/90 w-full p-4 text-white flex items-center justify-start">
                            <ImageSquare size={40} color="#fef6f6" className="p-2 bg-transparent border-1 border-white/20 rounded-lg" />
                            <span className="flex-1 px-2">Edição de foto</span>
                            <ArrowRight size={40} color="#fef6f6" className="p-2" />
                        </div>
                        <div className="border-1 border-white/20 rounded-xl bg-[#020617]/90 w-full p-4 text-white flex items-center justify-start">
                            <PlayCircle size={40} color="#fef6f6" className="p-2 bg-transparent border-1 border-white/20 rounded-lg" />
                            <span className="flex-1 px-2">Geração de vídeos</span>
                            <ArrowRight size={40} color="#fef6f6" className="p-2" />
                        </div>
                        <div className="border-1 border-white/20 rounded-xl bg-[#020617]/90 w-full p-4 text-white flex items-center justify-start">
                            <MusicNotes size={40} color="#fef6f6" className="p-2 bg-transparent border-1 border-white/20 rounded-lg" />
                            <span className="flex-1 px-2">Criador de áudios e músicas</span>
                            <ArrowRight size={40} color="#fef6f6" className="p-2" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center p-14 gap-4">
                    <div className="flex gap-0 w-full h-full">
                        <PlusCircle size={56} color="#fef6f6" className="p-4 bg-[#020617] border-1 border-white/20 border-r-0 rounded-l-lg" />
                        <input
                            type="text"
                            placeholder="Envie uma mensagem ou digite “/” para exibir os comandos"
                            className="w-full h-full bg-[#020617] border-white/20 border-1 border-l-0 rounded-r-xl"
                        />
                    </div>
                    <PaperPlaneRight size={56} color="#fef6f6" className="p-4 bg-[#020617] border-1 border-white/20 rounded-lg" />
                </div>
            </div>
        </div>
    )
}