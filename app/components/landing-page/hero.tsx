import Button from "@/app/ui/button";
import TextInput from "@/app/ui/text-input";
import ProjectCard from "../common/project-card";
import TotalVisits from "../common/total-visits";
import UserCard from "../common/user-card";


export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1 >
        <h2 className="text-xl leading-6">Crie sua própria página de projetos e compartilhe eles com o mundo
         <br />
         Acompanhe o engajamento com o analytics de clicks
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>
          <TextInput placeholder="Seu Link" />
          <Button>Criar Agora</Button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}