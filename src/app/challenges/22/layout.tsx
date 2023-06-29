import Image from "next/image";
import Script from "next/script";

export default function Page() {
    return (
        <body className="bg-purple-600 w-screen h-screen flex justify-center items-center">
            <main className="bg-white rounded-lg w-96 max-h-fit p-8">
                <div className="profile flex gap-3">
                    <Image src="https://github.com/volinha.png" alt="Volinha profile picture" className="rounded-full w-12" width={48} height={48} />
                    <div className="flex-col items-center justify-center">
                        <div className="font-bold text-lg">Vinícius Fernandes</div>
                        <div className="text-gray-400 text-sm">vinicius@example.com</div>
                    </div>
                </div>

                <div className="text-md pt-8">
                    <div className="py-4">
                        <span className="text-xs uppercase text-gray-400">
                            Conta
                        </span>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-user-circle"></i>
                                <span>Dados pessoais</span>
                            </div>
                            <i className="text-xl ph ph-caret-right"></i>
                        </div>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-key"></i>
                                Informações de login
                            </div>
                            <i className="text-xl ph ph-caret-right" style={{ justifySelf: 'end' }}></i>
                        </div>
                    </div>

                    <div className="py-4">
                        <span className="text-xs uppercase text-gray-400">
                            Preferências
                        </span>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-bell"></i>
                                Notificações
                            </div>
                            <i className="text-xl ph ph-caret-right"></i>
                        </div>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-person-arms-spread"></i>
                                Acessibilidade
                            </div>
                            <i className="text-xl ph ph-caret-right"></i>
                        </div>
                    </div>

                    <div className="py-4">
                        <span className="text-xs uppercase text-gray-400">
                            Privacidade
                        </span>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-devices"></i>
                                Aparelhos conectados
                            </div>
                            <i className="text-xl ph ph-caret-right"></i>
                        </div>
                        <div className="flex flex-row place-content-between items-center">
                            <div className="flex gap-2 py-2 items-center">
                                <i className="text-xl ph ph-user-switch"></i>
                                Contas vinculadas
                            </div>
                            <i className="text-xl ph ph-caret-right"></i>
                        </div>
                    </div>
                    <div className="py-4">
                        <div className="flex gap-2 py-2 items-center">
                            <i className="text-xl ph ph-question"></i>
                            Central de ajuda
                        </div>
                        <div className="flex gap-2 items-center text-red-500">
                            <i className="text-xl ph ph-sign-out"></i>
                            Sair
                        </div>
                    </div>
                </div>
            </main>
            <Script src="https://unpkg.com/@phosphor-icons/web"></Script>
        </body>
    )
}