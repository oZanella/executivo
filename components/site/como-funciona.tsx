import { CarFront, ClipboardList, MessageCircle } from 'lucide-react'
import { TituloSecao } from '@/components/site/titulo-secao'

const PASSOS = [
    {
        icone: ClipboardList,
        titulo: 'Conte sua viagem',
        texto: 'Informe origem, destino, data, horário e número de passageiros no formulário ou no WhatsApp.'
    },
    {
        icone: MessageCircle,
        titulo: 'Receba o orçamento',
        texto: 'Respondemos rapidamente com valor e detalhes. Combinado, a reserva está garantida.'
    },
    {
        icone: CarFront,
        titulo: 'Embarque tranquilo',
        texto: 'No dia, o motorista chega no horário e você viaja com conforto e segurança.'
    }
]

export function ComoFunciona() {
    return (
        <section className="py-20 sm:py-24">
            <div className="container">
                <TituloSecao sobretitulo="Como funciona" titulo="Agendar é simples" />
                <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
                    {PASSOS.map(({ icone: Icone, titulo, texto }, i) => (
                        <li key={titulo} className="relative text-center">
                            {i < PASSOS.length - 1 && (
                                <span
                                    className="absolute left-[calc(50%+3rem)] right-[calc(-50%+3rem)] top-8 hidden h-px bg-gradient-to-r from-primary/50 to-border md:block"
                                    aria-hidden="true"
                                />
                            )}
                            <span className="relative mx-auto grid size-16 place-items-center rounded-full border border-primary/30 bg-accent text-accent-foreground">
                                <Icone className="size-7" />
                                <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-navy text-2xs font-bold text-gold">
                                    {i + 1}
                                </span>
                            </span>
                            <h3 className="mt-5 text-lg font-semibold">{titulo}</h3>
                            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{texto}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
