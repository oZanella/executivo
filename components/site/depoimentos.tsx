import { Quote, Star } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { IconeInstagram } from '@/components/site/icones'
import { TituloSecao } from '@/components/site/titulo-secao'
import { DEPOIMENTOS } from '@/shared/constants/depoimentos'
import { linkInstagram } from '@/shared/constants/empresa'

export function Depoimentos() {
    const instagram = linkInstagram()

    // Sem depoimentos cadastrados e sem Instagram configurado, não há o que mostrar
    if (DEPOIMENTOS.length === 0 && !instagram) return null

    return (
        <section id="depoimentos" className="border-y border-border bg-muted/50 py-20 sm:py-24">
            <div className="container">
                <TituloSecao sobretitulo="Depoimentos" titulo="Quem viaja com a gente recomenda" />

                {DEPOIMENTOS.length > 0 ? (
                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {DEPOIMENTOS.map((d) => (
                            <figure key={d.nome} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-0.5 text-gold" aria-label="5 estrelas">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="size-4 fill-current" />
                                        ))}
                                    </div>
                                    <Quote className="size-6 text-border" />
                                </div>
                                <blockquote className="mt-4 flex-1 text-sm">“{d.texto}”</blockquote>
                                <figcaption className="mt-5 border-t border-border pt-4">
                                    <p className="text-sm font-semibold">{d.nome}</p>
                                    <p className="text-xs text-muted-foreground">{d.contexto}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                ) : null}

                {instagram && (
                    <div className="mt-10 text-center">
                        {DEPOIMENTOS.length === 0 && (
                            <p className="mb-5 text-muted-foreground">
                                Veja os relatos dos nossos clientes nos destaques do Instagram.
                            </p>
                        )}
                        <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({ variant: 'outline' })}
                        >
                            <IconeInstagram />
                            Ver depoimentos no Instagram
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}
