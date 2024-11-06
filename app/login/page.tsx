import Image from "next/image"
import { Button } from "../_components/ui/button"
import { LogInIcon } from "lucide-react"

function LoginPage() {
    return (
        <div className="grid h-full grid-cols-2">
            <div className="mx-auto flex h-full flex-col justify-center px-8 max-w-[550px]">
                <Image src="LogoFinance.svg" width={173} height={39} alt="Finance Manager" className="mb-8" />
                <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
                <p className="text-muted-foreground mb-8">A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.</p>
                <Button variant='outline'><LogInIcon className="mr-2"/> Fazer Login ou Criar conta</Button>
            </div>
            <div className="relative h-full w-full">
                <Image src="/BannerLogin.jpg" alt="Banner Login" fill className="object-cover" />
            </div>

        </div>
    )
}

export default LoginPage