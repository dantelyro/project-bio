import { TRIAL_DAYS } from "@/app/lib/config";
import Button from "@/app/components/ui/button";

export default function Pricing () {
  return (
    <div className="my-[150px] flex flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-6">
        <h3 className="text-3xl font-bold text-white">Um Valor acessível para todos</h3>
        <p className="text-content-body text-xl text-center">Junte-se a comunidade de criadores profissionais que já estão elevando sua <br />
        presença online, Teste gratuitamente por <strong className="text-accent-pink">{TRIAL_DAYS} Dias</strong>, sem Compromisso!
        </p>
      </div>
      <div className="flex items-end gap-9">
        <div className="w-[304px] p-8 flex flex-col items-center gap-7 rounded-2xl border border-[#1E1E1E]">
          <div className="flex flex-col">
            <span className="text-white font-bold text-2xl">Mensal</span>
            <span className="text-content-body">Apenas</span>
          </div>
            <div className="flex items-center gap-2">
              <span className="text-whit font-bold text-[48px]">R$9.90</span>
              <span className="text-content-headline text-2xl">Mês</span>
            </div>
            <Button variant="secondary">Assinar</Button>
        </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center rounded-t-2xl p-2 w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
              <span className="uppercase text-xs font-bold">Recomendado</span>
            </div>
            <div className="p-[1.6px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] rounded-b-2xl">
              <div className="w-full bg-background-secondary p-8 flex flex-col gap-7 rounded-b-2xl">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-2xl">Vitalício</span>
                  <span className="text-content-body">Economize com</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-[48px]">R$ 99.90</span>
                </div>
                <Button>Assinar</Button>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}