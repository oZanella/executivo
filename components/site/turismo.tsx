import { ArrowRight, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { TituloSecao } from '@/components/site/titulo-secao'
import { DESTINOS } from '@/shared/constants/destinos'
import { linkWhatsapp } from '@/shared/constants/empresa'
import { cn } from '@/lib/utils'

export function Turismo() {
    return (
        <section id="turismo" className="bg-hero py-20 text-navy-foreground sm:py-24">
            <div className="container">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <TituloSecao
                        claro
                        alinhamento="esquerda"
                        sobretitulo="Transfer turístico"
                        titulo="Conheça a Serra Gaúcha sem se preocupar com nada"
                        descricao="Levamos você e sua família aos principais destinos da região, no seu ritmo. Aproveite a vinícola: na volta, quem dirige somos nós."
                    />
                    <a
                        href={linkWhatsapp()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'gold' }), 'shrink-0 self-start lg:self-auto')}
                    >
                        Montar meu passeio
                        <ArrowRight />
                    </a>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {DESTINOS.map((destino, i) => (
                        <article
                            key={destino.nome}
                            className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-gold/40 hover:bg-white/[0.06]"
                        >
                            <span
                                className="absolute right-5 top-4 font-display text-4xl font-semibold text-white/[0.06]"
                                aria-hidden="true"
                            >
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <p className="flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-wider text-gold">
                                <MapPin className="size-3.5" />
                                {destino.cidade}
                            </p>
                            <h3 className="mt-3 font-display text-xl font-semibold">{destino.nome}</h3>
                            <p className="mt-2 text-sm text-navy-muted">{destino.descricao}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
