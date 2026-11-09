'use client'

import * as React from 'react'
import { format, isValid, parseISO } from 'date-fns'
import { CalendarDays } from 'lucide-react'
import { Calendar } from './calendar'
import { IconInput } from './icon-input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { dateInputToIso, isoToDateInput, maskDateInput } from '@/lib/format-date'

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    value: string
    onChange: (iso: string) => void
    minDate?: Date
}

/*
 * Campo de data com máscara DD/MM/AAAA (mesmo padrão do DateInput do Safeloc) + calendário em popover.
 * Digitar e escolher no calendário mantêm o mesmo valor: string ISO (yyyy-MM-dd), vazia enquanto incompleta.
 */
const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
    ({ value, onChange, minDate, placeholder = 'DD/MM/AAAA', ...props }, ref) => {
        const [texto, setTexto] = React.useState(() => isoToDateInput(value))
        const [aberto, setAberto] = React.useState(false)

        const selecionada = value && isValid(parseISO(value)) ? parseISO(value) : undefined

        function escolher(data: Date | undefined) {
            if (!data) return
            const iso = format(data, 'yyyy-MM-dd')
            setTexto(isoToDateInput(iso))
            onChange(iso)
            setAberto(false)
        }

        return (
            <IconInput
                ref={ref}
                icon={CalendarDays}
                inputMode="numeric"
                autoComplete="off"
                maxLength={10}
                placeholder={placeholder}
                value={texto}
                onChange={(e) => {
                    const mascarado = maskDateInput(e.target.value)
                    setTexto(mascarado)
                    onChange(dateInputToIso(mascarado))
                }}
                trailing={
                    <Popover open={aberto} onOpenChange={setAberto}>
                        <PopoverTrigger
                            type="button"
                            aria-label="Abrir calendário"
                            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:size-8"
                        >
                            <CalendarDays className="size-4" />
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-auto">
                            <Calendar
                                mode="single"
                                selected={selecionada}
                                onSelect={escolher}
                                defaultMonth={selecionada ?? minDate}
                                fromDate={minDate}
                                disabled={minDate ? { before: minDate } : undefined}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                }
                {...props}
            />
        )
    }
)
DatePicker.displayName = 'DatePicker'

export { DatePicker }
