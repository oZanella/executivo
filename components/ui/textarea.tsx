import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
    <textarea
        className={cn(
            'flex min-h-24 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm',
            'placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            'focus:outline-none focus:ring-2 focus:ring-ring',
            'transition-colors hover:border-muted-foreground/40',
            'aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive/30',
            className
        )}
        ref={ref}
        {...props}
    />
))
Textarea.displayName = 'Textarea'

export { Textarea }
