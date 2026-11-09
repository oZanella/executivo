import { cn } from '@/lib/utils'

interface TituloSecaoProps {
    sobretitulo: string
    titulo: string
    descricao?: string
    alinhamento?: 'centro' | 'esquerda'
    claro?: boolean
    className?: string
}

export function TituloSecao({
    sobretitulo,
    titulo,
    descricao,
    alinhamento = 'centro',
    claro = false,
    className
}: TituloSecaoProps) {
    return (
        <div className={cn('max-w-2xl', alinhamento === 'centro' && 'mx-auto text-center', className)}>
            <p
                className={cn(
                    'text-2xs font-bold uppercase tracking-[0.2em]',
                    claro ? 'text-gold' : 'text-primary'
                )}
            >
                {sobretitulo}
            </p>
            <h2
                className={cn(
                    'mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl',
                    claro ? 'text-navy-foreground' : 'text-foreground'
                )}
            >
                {titulo}
            </h2>
            {descricao && (
                <p className={cn('mt-4 text-base text-pretty', claro ? 'text-navy-muted' : 'text-muted-foreground')}>
                    {descricao}
                </p>
            )}
        </div>
    )
}
