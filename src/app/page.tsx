import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full md:h-screen w-screen md:overflow-x-hidden bg-gradient-radial-to-br from-rs-purple-700 to-rs-gray flex flex-col justify-between">
      <header className="w-full flex items-center justify-center p-4 bg-rs-gray text-white border-b-2 border-[#323238] sticky top-0 z-10 md:static">
        <div className="text-2xl cursor-default"><span className='text-rs-purple-500 text-3xl font-bold'>#</span>boraCodar <span className="text-3xl text-rs-purple-500">&#123;</span>hub<span className="text-3xl text-rs-purple-500">&#125;</span></div>
      </header>
      <div className="flex-1 h-48 min-h-48 grid grid-cols-1 p-3 gap-4 flex-grow sm:grid-cols-3 sm:p-4 xl:grid-cols-4">
        <Card
          title="Página 404"
          number={28}
          description="Desenvolver a uma página 404 com animações e botões de navegação."
        />

        <Card
          title="Página 404"
          number={27}
          description="Desenvolver a uma página 404 com animações e botões de navegação."
        />

        <Card
          title="Receita Junina"
          number={26}
          description="Desenvolver a versão web de uma experiência de receita junina."
        />

        <Card
          title="VR Player"
          number={25}
          description="Desenvolver a versão web de um visualizador de vídeos em VR."
        />

        <Card
          title="Controle de Iluminação"
          number={24}
          description="Versão web de um controlador de iluminação em tempo real."
        />

        <Card
          title="Profile Settings"
          number={22}
          description="Versão web de um menu de configurações de um perfil."
        />

      </div>
      <footer className="bottom-0 w-full flex sm:flex-row flex-col sm:gap-0 gap-2 items-center sm:justify-around justify-center p-4 bg-rs-gray text-white border-t-2 border-[#323238]">
        <div className="sm:text-xl text-lg italic flex sm:gap-0 gap-2 sm:flex-col flex-row items-start justify-center">
          <Link href="https://github.com/volinha" target="_blank" className="group relative inline-flex items-center justify-start overflow-hidden bg-transparent transition-all hover:bg-transparent p-1 gap-2">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="logo" width={25} height={25} className="invert group-hover:invert-0 transition-all z-30" />
            <span className="-z-1 absolute left-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="z-10 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black">
              github
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/viniciusfernandesdev/" target="_blank" className="group relative inline-flex items-center justify-start overflow-hidden bg-transparent transition-all hover:bg-transparent p-1 gap-2">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" alt="logo" width={25} height={25} className="z-30" />
            <span className="-z-1 absolute left-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="z-10 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black">
              linkedin
            </span>
          </Link>
          <Link href="mailto:viniciusfernandesdev@gmail.com" target="_blank" className="group relative inline-flex items-center justify-start overflow-hidden bg-transparent transition-all hover:bg-transparent p-1 gap-2">
            <Image src="https://raw.githubusercontent.com/gilbarbara/logos/main/logos/google-gmail.svg" alt="logo" width={25} height={25} className="z-30" />
            <span className="-z-1 absolute left-0 h-full w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="z-10 w-full text-white transition-colors duration-300 ease-in-out group-hover:text-black">
              email
            </span>
          </Link>
        </div>
        <div className="sm:text-2xl text-lg flex gap-2 items-center justify-center cursor-default">feito com <div className="text-red-500 text-4xl animate-bounce">♥</div> por <span className='text-rs-purple-500'>Vinícius Fernandes</span></div>
      </footer>
    </main>
  )
}
