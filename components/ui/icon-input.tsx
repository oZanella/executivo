import * as React from 'react'
import type { LucideIcon } from 'lucide-react'
import { Input, type InputProps } from './input'
import { cn } from '@/lib/utils'

export interface IconInputProps extends InputProps {
    icon: LucideIcon
    /* Conteúdo à direita do campo (ex.: botão que abre um calendário) */
    trailing?: React.ReactNode
}

const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
    ({ icon: Icone, trailing, className, ...props }, ref) => (
        <div className="group relative">
            <Icone className="pointer-events-none absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input ref={ref} className={cn('pl-9', trailing && 'pr-11', className)} {...props} />
            {trailing && <div className="absolute right-1 top-1/2 -translate-y-1/2">{trailing}</div>}
        </div>
    )
)
IconInput.displayName = 'IconInput'

export { IconInput }
