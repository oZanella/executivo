'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
    const [escuro, setEscuro] = useState(false)

    useEffect(() => {
        setEscuro(document.documentElement.classList.contains('dark'))
    }, [])

    function alternar() {
        const proximo = !escuro
        setEscuro(proximo)
        document.documentElement.classList.toggle('dark', proximo)
        try {
            localStorage.setItem('theme', proximo ? 'dark' : 'light')
        } catch {
            // Sem localStorage (aba anônima/bloqueado): o tema vale só para esta visita
        }
    }

    return (
        <button
            type="button"
            onClick={alternar}
            title={escuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
            aria-label={escuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className={cn(
                'inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors',
                className
            )}
        >
            {escuro ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
    )
}
