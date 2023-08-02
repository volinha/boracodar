import Image from "next/image";

import Poster1 from "../assets/Poster.png";
import { CalendarBlank, Clock, PlayCircle, Star } from "@phosphor-icons/react";

export default function MovieCard() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-full text-white flex items-center justify-between">
                <p className="text-xl">Barbie</p>
                <p className="flex items-center gap-1 text-base text-[#FEEA35] font-semibold">
                    <Star size={16} color="#FEEA35" weight="fill" />
                    4,9
                </p>
            </div>
            <div>
                <Image src={Poster1} alt="Poster" width={194} height={288} />
            </div>
            <div className="flex w-full items-center justify-between text-[#8B8D9B] text-xs">
                <div className="flex items-center gap-1">
                    <Clock size={20} color="#8B8D9B" />
                    <span>1:54:00</span>
                </div>
                <div className="flex items-center gap-1">
                    <CalendarBlank size={20} color="#8B8D9B" />
                    <span>2023</span>
                </div>
            </div>
            <button className="flex items-center justify-evenly gap-2 w-full bg-[#2B2B37]/80 hover:bg-[#2B2B37] transition-all rounded-sm text-white px-4 py-2">
            <PlayCircle size={28} color="#fef6f6" weight="fill" />
                <span>Assistir trailer</span>
            </button>
        </div>
    )
}