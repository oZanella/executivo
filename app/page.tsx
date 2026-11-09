import { Agendamento } from '@/components/site/agendamento'
import { Cabecalho } from '@/components/site/cabecalho'
import { ComoFunciona } from '@/components/site/como-funciona'
import { Depoimentos } from '@/components/site/depoimentos'
import { Diferenciais } from '@/components/site/diferenciais'
import { Empresas } from '@/components/site/empresas'
import { Frota } from '@/components/site/frota'
import { Hero } from '@/components/site/hero'
import { PerguntasFrequentes } from '@/components/site/perguntas-frequentes'
import { Regioes } from '@/components/site/regioes'
import { Rodape } from '@/components/site/rodape'
import { Servicos } from '@/components/site/servicos'
import { Turismo } from '@/components/site/turismo'
import { WhatsappFlutuante } from '@/components/site/whatsapp-flutuante'

export default function HomePage() {
    return (
        <>
            <Cabecalho />
            <main>
                <Hero />
                <Diferenciais />
                <Frota />
                <Servicos />
                <Turismo />
                <Empresas />
                <Regioes />
                <ComoFunciona />
                <Depoimentos />
                <Agendamento />
                <PerguntasFrequentes />
            </main>
            <Rodape />
            <WhatsappFlutuante />
        </>
    )
}
