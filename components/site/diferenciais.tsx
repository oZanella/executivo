import { CarFront, Clock, Crown, ShieldCheck } from 'lucide-react'

const DIFERENCIAIS = [
    {
        icone: Crown,
        titulo: 'Experiência VIP',
        texto: 'Atendimento atencioso, do primeiro contato até o desembarque.'
    },
    {
        icone: ShieldCheck,
        titulo: 'Segurança e conforto',
        texto: 'Veículos revisados, limpos e climatizados, com motorista profissional.'
    },
    {
        icone: CarFront,
        titulo: 'Carros confortáveis',
        texto: 'Fiat Fastback e Chevrolet Onix, climatizados e bem cuidados.'
    },
    {
        icone: Clock,
        titulo: 'Pontualidade',
        texto: 'Horário combinado é horário cumprido, inclusive em voos.'
    }
]

export function Diferenciais() {
    return (
        <section aria-label="Diferenciais" className="border-y border-border bg-card">
            <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
                {DIFERENCIAIS.map(({ icone: Icone, titulo, texto }) => (
                    <div key={titulo} className="flex gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                            <Icone className="size-5" />
                        </span>
                        <div>
                            <h3 className="text-base font-semibold">{titulo}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{texto}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
