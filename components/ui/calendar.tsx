'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
    return (
        <DayPicker
            locale={ptBR}
            showOutsideDays={showOutsideDays}
            className={cn('p-1', className)}
            classNames={{
                months: 'flex flex-col',
                month: 'space-y-3',
                caption: 'relative flex items-center justify-center pt-1',
                caption_label: 'text-sm font-semibold capitalize',
                nav: 'flex items-center',
                nav_button:
                    'inline-flex size-8 items-center justify-center rounded-md border border-input text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-30',
                nav_button_previous: 'absolute left-0',
                nav_button_next: 'absolute right-0',
                table: 'w-full border-collapse',
                head_row: 'flex',
                head_cell: 'w-10 text-2xs font-medium uppercase text-muted-foreground',
                row: 'mt-1 flex w-full',
                cell: 'relative size-10 p-0 text-center',
                day: 'inline-flex size-10 items-center justify-center rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                day_selected:
                    'bg-primary font-semibold text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                day_today: 'font-semibold text-primary ring-1 ring-inset ring-primary/40',
                day_outside: 'text-muted-foreground/50',
                day_disabled: 'pointer-events-none text-muted-foreground/30',
                day_hidden: 'invisible',
                ...classNames
            }}
            components={{
                IconLeft: () => <ChevronLeft className="size-4" />,
                IconRight: () => <ChevronRight className="size-4" />
            }}
            {...props}
        />
    )
}
Calendar.displayName = 'Calendar'

export { Calendar }
