import Image from 'next/image'
import { Check, Users } from 'lucide-react'
import { TituloSecao } from '@/components/site/titulo-secao'
import { FROTA } from '@/shared/constants/frota'

export function Frota() {
    const algumaIlustrativa = FROTA.some((v) => v.ilustrativa)

    return (
        <section id="frota" className="py-20 sm:py-24">
            <div className="container">
                <TituloSecao
                    sobretitulo="Os carros"
                    titulo="Conforto em cada trajeto"
                    descricao="Veículos limpos, climatizados e revisados, conduzidos por motorista profissional."
                />

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    {FROTA.map((v) => (
                        <article
                            key={v.valor}
                            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/10"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                <Image
                                    src={v.imagem}
                                    alt={`${v.marca} ${v.modelo}${v.ilustrativa ? ' (imagem ilustrativa)' : ` ${v.cor.toLowerCase()}`}`}
                                    fill
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <span className="absolute left-4 top-4 rounded-full bg-navy/85 px-3 py-1 text-2xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
                                    {v.categoria}
                                </span>
                                {v.ilustrativa && (
                                    <span className="absolute bottom-3 right-3 rounded bg-black/55 px-2 py-0.5 text-3xs text-white/90">
                                        Imagem ilustrativa
                                    </span>
                                )}
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="font-display text-2xl font-semibold">
                                        <span className="text-muted-foreground">{v.marca}</span> {v.modelo}
                                    </h3>
                                    <p className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <span className="tabular-nums">{v.ano}</span>
                                        <span className="flex items-center gap-1.5">
                                            <span className="size-3 rounded-full border border-border" style={{ background: v.corHex }} aria-hidden="true" />
                                            {v.cor}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Users className="size-4" />
                                            Até {v.passageiros} passageiros
                                        </span>
                                    </p>
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">{v.descricao}</p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {v.itens.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                                        >
                                            <Check className="size-3.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {algumaIlustrativa && (
                    <p className="mt-6 text-center text-2xs text-muted-foreground">
                        Fotos ilustrativas dos modelos via Wikimedia Commons:{' '}
                        {FROTA.flatMap((v) => (v.credito ? [{ modelo: v.modelo, ...v.credito }] : [])).map((c, i, lista) => (
                            <span key={c.url}>
                                <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                                    {c.modelo}
                                </a>{' '}
                                ({c.autor}, {c.licenca}){i < lista.length - 1 ? ' · ' : '.'}
                            </span>
                        ))}
                    </p>
                )}
            </div>
        </section>
    )
}
