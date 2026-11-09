import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-primary text-primary-foreground hover:bg-primary/90',
                gold: 'bg-gold text-navy hover:bg-gold/90',
                whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp/90',
                outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
                'outline-light': 'border border-white/25 bg-white/5 text-white hover:bg-white/10',
                ghost: 'hover:bg-accent hover:text-accent-foreground'
            },
            size: {
                default: 'h-11 px-4 py-2 sm:h-10',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-12 rounded-md px-6 text-base'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => (
        <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
