import { EMPRESA } from '@/shared/constants/empresa'

/* Logo provisória em texto. Quando houver arquivo de logo, troque por <Image src="/logo.png" ... />. */
export function Logo() {
    return (
        <span className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-md border border-gold/40 bg-gold/10 font-display text-lg font-semibold text-gold">
                {EMPRESA.nome.charAt(0)}
            </span>
            <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-wide text-navy-foreground">
                    {EMPRESA.nome}
                </span>
                <span className="mt-1 text-3xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Transporte executivo
                </span>
            </span>
        </span>
    )
}
