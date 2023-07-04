import Image from "next/image";
import text1 from "./assets/undertale_text_box.png"
import text2 from "./assets/undertale_text_box2.png"
import text3 from "./assets/undertale_text_box3.png"

export default function Box() {
    return (
        <div className="h-screen w-screen gap-2 flex flex-col items-center justify-center">
            <Image src={text1} alt="text" width={900} height={900} />
            <Image src={text2} alt="text" width={900} height={900} />
            <Image src={text3} alt="text" width={900} height={900} />
        </div>
    )
}