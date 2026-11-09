import Image from 'next/image'
import { ArrowRight, CarFront, MapPin, MessageCircle, ShieldCheck, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { EMPRESA, linkWhatsapp } from '@/shared/constants/empresa'
import { cn } from '@/lib/utils'

const DESTAQUES = [
    { icone: CarFront, texto: 'Fiat Fastback e Chevrolet Onix' },
    { icone: Users, texto: 'Até 4 passageiros' },
    { icone: ShieldCheck, texto: 'Segurança em 1º lugar' }
]

const ROTEIROS = [
    { origem: 'Farroupilha', destino: 'Aeroporto Salgado Filho', tipo: 'Transfer aeroporto' },
    { origem: 'Caxias do Sul', destino: 'Gramado e Canela', tipo: 'Passeio turístico' },
    { origem: 'Hotel', destino: 'Vale dos Vinhedos', tipo: 'Roteiro de vinícolas' },
    { origem: 'Sua empresa', destino: 'Reunião com cliente', tipo: 'Corporativo' }
]

export function Hero() {
    return (
        <section id="inicio" className="bg-hero relative overflow-hidden text-navy-foreground">
            {EMPRESA.imagemHero && (
                <>
                    <Image src={EMPRESA.imagemHero} alt="" fill priority className="object-cover opacity-35" />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
                </>
            )}

            <div className="container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-2xs font-semibold uppercase tracking-[0.16em] text-gold">
                        <MapPin className="size-3.5" />
                        {EMPRESA.cidadeBase} e Serra Gaúcha
                    </p>

                    <h1 className="mt-6 font-display text-4xl font-semibold text-balance sm:text-5xl">
                        Experiência <span className="text-gold-gradient">VIP</span> no seu transporte
                    </h1>

                    <p className="mt-5 max-w-xl text-lg text-navy-muted text-pretty">
                        Transfer para aeroportos, passeios turísticos, viagens e transporte para empresas, com
                        carros confortáveis, motorista profissional e pontualidade.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={linkWhatsapp()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ variant: 'gold', size: 'lg' })}
                        >
                            <MessageCircle />
                            Pedir orçamento no WhatsApp
                        </a>
                        <a href="#servicos" className={buttonVariants({ variant: 'outline-light', size: 'lg' })}>
                            Ver serviços
                            <ArrowRight />
                        </a>
                    </div>

                    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                        {DESTAQUES.map(({ icone: Icone, texto }) => (
                            <li key={texto} className="flex items-center gap-2 text-sm text-navy-foreground/90">
                                <Icone className="size-4 text-gold" />
                                {texto}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" aria-hidden="true" />
                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
                        <p className="text-2xs font-bold uppercase tracking-[0.2em] text-gold">Roteiros mais pedidos</p>
                        <ul className="mt-4 divide-y divide-white/10">
                            {ROTEIROS.map((r) => (
                                <li key={r.destino} className="flex items-center gap-4 py-4 first:pt-2 last:pb-1">
                                    <div className="flex flex-col items-center self-stretch py-1" aria-hidden="true">
                                        <span className="size-2 rounded-full bg-navy-muted" />
                                        <span className="w-px flex-1 bg-gradient-to-b from-navy-muted/60 to-gold/60" />
                                        <span className="size-2 rounded-full bg-gold" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-xs text-navy-muted">{r.origem}</p>
                                        <p className="truncate text-base font-semibold">{r.destino}</p>
                                    </div>
                                    <span className="hidden shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-3xs font-semibold uppercase tracking-wider text-navy-muted sm:inline">
                                        {r.tipo}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#agendar"
                            className={cn(
                                buttonVariants({ variant: 'outline-light' }),
                                'mt-5 w-full border-gold/30 text-gold hover:bg-gold/10'
                            )}
                        >
                            Montar meu roteiro
                            <ArrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
