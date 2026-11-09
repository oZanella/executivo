import { EMPRESA } from '@/shared/constants/empresa'
import { cn } from '@/lib/utils'

/*
 * Símbolo: estrada em curva (as estradas da Serra) que termina num marcador de destino.
 * O mesmo desenho está em app/icon.svg (ícone da aba do navegador).
 */
export function MarcaLogo({ className }: { className?: string }) {
    return (
        <span
            className={cn(
                'grid size-9 shrink-0 place-items-center rounded-[28%] bg-gradient-to-br from-[#f3cf7a] to-[#c98a2a] shadow-md shadow-black/30',
                className
            )}
            aria-hidden="true"
        >
            <svg viewBox="0 0 40 40" className="size-full">
                <path
                    d="M10.5 33 C10.5 22.5 29 25.5 29 15"
                    fill="none"
                    stroke="#0c1220"
                    strokeWidth={6.5}
                    strokeLinecap="round"
                />
                <path
                    d="M10.5 33 C10.5 22.5 29 25.5 29 15"
                    fill="none"
                    stroke="#f3cf7a"
                    strokeWidth={1.3}
                    strokeLinecap="round"
                    strokeDasharray="2.4 2.8"
                />
                <circle cx="29" cy="10.5" r="4.6" fill="#0c1220" />
                <circle cx="29" cy="10.5" r="1.7" fill="#f3cf7a" />
            </svg>
        </span>
    )
}

export function Logo() {
    return (
        <span className="flex items-center gap-2.5">
            <MarcaLogo />
            <span className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-tight text-navy-foreground sm:text-lg">
                    {EMPRESA.nome}
                </span>
                <span className="mt-1 text-3xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Transporte executivo
                </span>
            </span>
        </span>
    )
}
