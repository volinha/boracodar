import Image from "next/image"
import Link from "next/link"

export default function Card(
    { title, number, description }
        :
        { title: string, number: number, description: string }
) {
    return (
        <Link href={`/challenges/${number}`} className="drop-shadow-[0_0_35px_rgba(0,0,0,0.25)] max-w-96 min-h-44 aspect-video">
            <div className="relative w-full max-w-[350px] border-2 border-white/30 group text-white hover:shadow-lg hover:-translate-y-3 hover:translate-x-3 transition-all">
            <Image className="w-full aspect-auto md:grayscale group-hover:grayscale-0 transition-all" src={`/images/${number}.png`} width={250} height={200} alt="fundo" />
                <div className="absolute bottom-2 overflow-auto m-1">
                    <h1 className="bg-black w-fit p-1 ">
                        <span className="text-2xl">#{number}</span> {title}
                    </h1>
                    <p className='text-sm bg-black w-fit p-1'>
                        {description}
                    </p>
                </div>
            </div>
        </Link>

    )
}