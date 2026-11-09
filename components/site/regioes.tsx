import { MapPin, Plane, Route } from 'lucide-react'
import { TituloSecao } from '@/components/site/titulo-secao'
import { AEROPORTOS, CIDADES_ATENDIDAS, ESTADOS_VIAGENS } from '@/shared/constants/regioes'
import { EMPRESA } from '@/shared/constants/empresa'

export function Regioes() {
    return (
        <section id="regioes" className="border-y border-border bg-muted/50 py-20 sm:py-24">
            <div className="container">
                <TituloSecao
                    sobretitulo="Regiões que atendemos"
                    titulo={`${EMPRESA.cidadeBase} e toda a Serra Gaúcha`}
                    descricao="Saímos de Farroupilha e atendemos as principais cidades da Serra, com viagens para todo o Rio Grande do Sul, Santa Catarina e Paraná."
                />

                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
                        <h3 className="flex items-center gap-2 text-base font-semibold">
                            <MapPin className="size-5 text-primary" />
                            Cidades atendidas
                        </h3>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {CIDADES_ATENDIDAS.map((cidade) => (
                                <li
                                    key={cidade}
                                    className={
                                        cidade === EMPRESA.cidadeBase
                                            ? 'rounded-full bg-navy px-3.5 py-1.5 text-sm font-semibold text-gold'
                                            : 'rounded-full border border-border bg-background px-3.5 py-1.5 text-sm'
                                    }
                                >
                                    {cidade}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-base font-semibold">
                                <Plane className="size-5 text-primary" />
                                Aeroportos
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {AEROPORTOS.map((a) => (
                                    <li key={a.sigla} className="flex items-center gap-3">
                                        <span className="grid h-8 w-12 shrink-0 place-items-center rounded-md bg-accent text-2xs font-bold text-accent-foreground">
                                            {a.sigla}
                                        </span>
                                        <span className="text-sm leading-tight">
                                            {a.nome}
                                            <span className="block text-xs text-muted-foreground">{a.cidade}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 text-base font-semibold">
                                <Route className="size-5 text-primary" />
                                Viagens
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">Viagens para os três estados do Sul:</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {ESTADOS_VIAGENS.map((estado) => (
                                    <li key={estado} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                                        {estado}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
