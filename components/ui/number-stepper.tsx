'use client'

import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NumberStepperProps {
    id?: string
    value: number
    onChange: (valor: number) => void
    min?: number
    max?: number
    'aria-labelledby'?: string
    className?: string
}

const botaoClasse =
    'inline-flex h-full w-11 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-30 sm:w-10'

/* Contador com botões − / +. Também responde às setas do teclado (role="spinbutton"). */
function NumberStepper({ id, value, onChange, min = 1, max = 99, className, ...props }: NumberStepperProps) {
    const alterar = (delta: number) => onChange(Math.min(max, Math.max(min, value + delta)))

    return (
        <div
            className={cn(
                'flex h-11 items-stretch overflow-hidden rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring sm:h-10',
                className
            )}
        >
            <button type="button" tabIndex={-1} aria-label="Diminuir" onClick={() => alterar(-1)} disabled={value <= min} className={botaoClasse}>
                <Minus className="size-4" />
            </button>
            <div
                id={id}
                role="spinbutton"
                tabIndex={0}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                aria-labelledby={props['aria-labelledby']}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
                        e.preventDefault()
                        alterar(1)
                    } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
                        e.preventDefault()
                        alterar(-1)
                    }
                }}
                className="flex flex-1 select-none items-center justify-center text-base font-semibold tabular-nums outline-none sm:text-sm"
            >
                {value}
            </div>
            <button type="button" tabIndex={-1} aria-label="Aumentar" onClick={() => alterar(1)} disabled={value >= max} className={botaoClasse}>
                <Plus className="size-4" />
            </button>
        </div>
    )
}

export { NumberStepper }
