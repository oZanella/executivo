import { Check } from 'lucide-react'
import { TituloSecao } from '@/components/site/titulo-secao'
import { SERVICOS } from '@/shared/constants/servicos'

export function Servicos() {
    return (
        <section id="servicos" className="py-20 sm:py-24">
            <div className="container">
                <TituloSecao
                    sobretitulo="Serviços"
                    titulo="Um transporte para cada ocasião"
                    descricao="Do aeroporto ao passeio na Serra, da reunião de negócios ao casamento: você só embarca, a gente cuida do resto."
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICOS.map(({ valor, titulo, descricao, icone: Icone, itens }) => (
                        <article
                            key={valor}
                            className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5"
                        >
                            <span className="grid size-12 place-items-center rounded-lg bg-navy text-gold transition-colors">
                                <Icone className="size-6" />
                            </span>
                            <h3 className="mt-5 text-lg font-semibold">{titulo}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{descricao}</p>
                            <ul className="mt-5 space-y-2 border-t border-border pt-5">
                                {itens.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
