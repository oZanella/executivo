'use client'

import * as React from 'react'
import { Clock } from 'lucide-react'
import { IconInput } from './icon-input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { useNonPassiveWheelScroll } from '@/lib/use-non-passive-wheel-scroll'
import { cn } from '@/lib/utils'

const HORARIOS = Array.from({ length: 48 }, (_, i) => {
    const h = String(Math.floor(i / 2)).padStart(2, '0')
    return `${h}:${i % 2 === 0 ? '00' : '30'}`
})

/* Ao abrir sem horário escolhido, a lista já começa no início da manhã */
const HORARIO_REFERENCIA = '06:00'

export function maskTimeInput(valor: string) {
    const digitos = valor.replace(/\D/g, '').slice(0, 4)
    let horas = digitos.slice(0, 2)
    let minutos = digitos.slice(2, 4)
    if (horas.length === 2 && Number(horas) > 23) horas = '23'
    if (minutos.length === 2 && Number(minutos) > 59) minutos = '59'
    return digitos.length > 2 ? `${horas}:${minutos}` : horas
}

export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: string
    onChange: (valor: string) => void
}

/* Campo de horário com máscara HH:MM + lista de horários (de 30 em 30 min) em popover */
const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
    ({ value, onChange, placeholder = 'HH:MM', ...props }, ref) => {
        const [aberto, setAberto] = React.useState(false)
        const rolagemSuave = useNonPassiveWheelScroll<HTMLDivElement>()

        const refLista = React.useCallback(
            (el: HTMLDivElement | null) => {
                rolagemSuave(el)
                if (!el) return
                const alvo =
                    el.querySelector<HTMLElement>('[data-selecionado="true"]') ??
                    el.querySelector<HTMLElement>(`[data-hora="${HORARIO_REFERENCIA}"]`)
                if (alvo) el.scrollTop = alvo.offsetTop - el.clientHeight / 2 + alvo.clientHeight / 2
            },
            [rolagemSuave]
        )

        return (
            <IconInput
                ref={ref}
                icon={Clock}
                inputMode="numeric"
                autoComplete="off"
                maxLength={5}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(maskTimeInput(e.target.value))}
                trailing={
                    <Popover open={aberto} onOpenChange={setAberto}>
                        <PopoverTrigger
                            type="button"
                            aria-label="Escolher horário"
                            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:size-8"
                        >
                            <Clock className="size-4" />
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-60 p-2">
                            <div ref={refLista} className="grid max-h-60 grid-cols-3 gap-1 overflow-y-auto pr-1">
                                {HORARIOS.map((h) => (
                                    <button
                                        key={h}
                                        type="button"
                                        data-hora={h}
                                        data-selecionado={h === value}
                                        onClick={() => {
                                            onChange(h)
                                            setAberto(false)
                                        }}
                                        className={cn(
                                            'rounded-md py-2 text-sm tabular-nums transition-colors hover:bg-accent hover:text-accent-foreground',
                                            h === value && 'bg-primary font-semibold text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                                        )}
                                    >
                                        {h}
                                    </button>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                }
                {...props}
            />
        )
    }
)
TimePicker.displayName = 'TimePicker'

export { TimePicker }
