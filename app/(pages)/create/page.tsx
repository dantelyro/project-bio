import Header from "@/app/components/landing-page/header";
import Button from "@/app/ui/button";
import TextInput from "@/app/ui/text-input";
import { Rocket } from "lucide-react";

export default function CreatePage () {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha Seu Link</h1>
          <Rocket className="size-10"/>
        </div>
        <form 
          action=""
          className="w-full flex items-center gap-2"
        >

          <span className="text-white">ProjectIn.Bio/</span>
          <TextInput />
          <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
          <span className="text-accent-pink">Erro de Exemplo</span>
        </div>
      </div>
    </div>
  )
}