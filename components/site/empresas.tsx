import { Building2, CalendarCheck, Handshake, MessageCircle, UserCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { TituloSecao } from '@/components/site/titulo-secao'
import { linkWhatsapp } from '@/shared/constants/empresa'
import { cn } from '@/lib/utils'

const BENEFICIOS = [
    {
        icone: UserCheck,
        titulo: 'Recepção de clientes e visitantes',
        texto: 'Seu cliente é recebido no aeroporto com pontualidade e cordialidade: a primeira impressão é da sua empresa.'
    },
    {
        icone: Building2,
        titulo: 'Executivos e equipes',
        texto: 'Deslocamento para reuniões, visitas técnicas, feiras e eventos, com até 4 passageiros por veículo.'
    },
    {
        icone: CalendarCheck,
        titulo: 'Atendimento recorrente',
        texto: 'Agenda fixa ou sob demanda, com um contato direto para resolver tudo pelo WhatsApp.'
    },
    {
        icone: Handshake,
        titulo: 'Proposta sob medida',
        texto: 'Montamos condições de acordo com o volume e a rotina da sua empresa.'
    }
]

export function Empresas() {
    return (
        <section id="empresas" className="py-20 sm:py-24">
            <div className="container grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
                <div className="lg:sticky lg:top-24">
                    <TituloSecao
                        alinhamento="esquerda"
                        sobretitulo="Para empresas"
                        titulo="Transfer corporativo com padrão executivo"
                        descricao="Um parceiro de transporte confiável para a sua empresa na Serra Gaúcha: menos preocupação com logística, mais foco no negócio."
                    />
                    <a
                        href={linkWhatsapp()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}
                    >
                        <MessageCircle />
                        Solicitar proposta corporativa
                    </a>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {BENEFICIOS.map(({ icone: Icone, titulo, texto }) => (
                        <div key={titulo} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                            <Icone className="size-6 text-primary" />
                            <h3 className="mt-4 text-base font-semibold">{titulo}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
