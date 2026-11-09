import { ChevronDown } from 'lucide-react'
import { TituloSecao } from '@/components/site/titulo-secao'
import { PERGUNTAS_FREQUENTES } from '@/shared/constants/faq'

export function PerguntasFrequentes() {
    return (
        <section id="duvidas" className="border-t border-border bg-muted/50 py-20 sm:py-24">
            <div className="container max-w-3xl">
                <TituloSecao sobretitulo="Dúvidas frequentes" titulo="Perguntas frequentes" />
                <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-card">
                    {PERGUNTAS_FREQUENTES.map((item) => (
                        <details key={item.pergunta} className="group px-6">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold [&::-webkit-details-marker]:hidden">
                                {item.pergunta}
                                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="pb-5 text-sm text-muted-foreground">{item.resposta}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
