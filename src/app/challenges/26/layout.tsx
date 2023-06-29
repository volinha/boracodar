'use client'

import Image from "next/image";
import pamonha from './assets/pamonha.png'

import Script from "next/script";
import { useState } from "react";

export default function Page() {
    const [portions, setPortions] = useState(1)

    return (
        <div className="w-screen h-screen font-serif text-[#58190A] bg-[#FEECE0]">
            <div className="h-screen flex flex-col">
                <div className="flex-grow flex items-center justify-center gap-14 ">
                    <div>
                        <Image src={pamonha} alt="Desenho de uma pamonha" width={409} className="hover:animate-wiggle hover:scale-110 transition-all" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="font-bold text-6xl">Pamonha</div>
                        <div className="text-3xl">Prato típico com milho verde ralado</div>
                        <div className="font-light text-xl flex gap-1">
                            <span>Porções</span>
                            <div className="flex items-center justify-center gap-1">
                                <button className="mt-1" onClick={() => setPortions(portions > 1 ? portions - 1 : portions)}>
                                    <i className="ph ph-minus-circle"></i>
                                </button>
                                {portions}
                                <button className="mt-1" onClick={() => setPortions(portions + 1)}>
                                    <i className="ph ph-plus-circle"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow flex items-center justify-center gap-64 text-white text-lg font-bold clip-background hover:clip-background-hover transition-all">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-start gap-3 pb-2 text-2xl">
                            <i className="ph ph-basket"></i>
                            <h3>Ingredientes</h3>
                        </div>
                        <ul className="list-disc font-sans font-light">
                            <li>{portions} {portions === 1 ? 'espiga' : 'espigas'} de milho verde</li>
                            <li>{portions} {portions === 1 ? 'colher' : 'colheres'} de sopa de açúcar</li>
                            <li>{portions} {portions === 1 ? 'colher' : 'colheres'} de sopa de manteiga</li>
                            <li>Sal a gosto</li>
                            <li>Palha de milho (para embrulhar)</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center justify-start gap-3 pb-2 text-2xl">
                            <i className="ph ph-cooking-pot"></i>
                            <h3>Modo de preparo</h3>
                        </div>
                        <ul className="list-decimal font-sans font-light">
                            <li>Descasque {portions > 1 ? "as espigas" : "a espiga"} de milho e corte os grãos.</li>
                            <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
                            <li>Coloque a massa nas palhas de milho e feche bem.</li>
                            <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
                            <li>Deixe esfriar e sirva.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Script src="https://unpkg.com/@phosphor-icons/web" />
        </div>
    )
}