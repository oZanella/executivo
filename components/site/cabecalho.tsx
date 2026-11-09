'use client'

import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Logo } from '@/components/site/logo'
import { linkWhatsapp } from '@/shared/constants/empresa'
import { cn } from '@/lib/utils'

const LINKS = [
    { href: '#servicos', rotulo: 'Serviços' },
    { href: '#frota', rotulo: 'Frota' },
    { href: '#turismo', rotulo: 'Turismo' },
    { href: '#empresas', rotulo: 'Empresas' },
    { href: '#regioes', rotulo: 'Regiões' },
    { href: '#agendar', rotulo: 'Agendar' }
]

export function Cabecalho() {
    const [aberto, setAberto] = useState(false)

    useEffect(() => {
        if (!aberto) return
        const fecharComEsc = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)
        window.addEventListener('keydown', fecharComEsc)
        return () => window.removeEventListener('keydown', fecharComEsc)
    }, [aberto])

    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/85 text-navy-foreground backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between gap-4">
                <a href="#inicio" className="shrink-0" onClick={() => setAberto(false)}>
                    <Logo />
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
                    {LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-navy-muted transition-colors hover:text-white"
                        >
                            {link.rotulo}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-1">
                    <ThemeToggle className="text-navy-muted hover:bg-white/10 hover:text-white" />
                    <a
                        href={linkWhatsapp()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: 'gold', size: 'sm' }), 'ml-1 hidden sm:inline-flex')}
                    >
                        <MessageCircle />
                        Orçamento
                    </a>
                    <button
                        type="button"
                        onClick={() => setAberto((v) => !v)}
                        aria-expanded={aberto}
                        aria-controls="menu-mobile"
                        aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
                        className="inline-flex size-10 items-center justify-center rounded-md text-navy-foreground hover:bg-white/10 lg:hidden"
                    >
                        {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>
            </div>

            {aberto && (
                <nav
                    id="menu-mobile"
                    aria-label="Menu"
                    className="border-t border-white/10 bg-navy animate-in fade-in slide-in-from-top-2 lg:hidden"
                >
                    <div className="container flex flex-col py-3">
                        {LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setAberto(false)}
                                className="rounded-md px-2 py-3 text-base font-medium text-navy-foreground hover:bg-white/5"
                            >
                                {link.rotulo}
                            </a>
                        ))}
                        <a
                            href={linkWhatsapp()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: 'gold' }), 'mt-2')}
                        >
                            <MessageCircle />
                            Pedir orçamento no WhatsApp
                        </a>
                    </div>
                </nav>
            )}
        </header>
    )
}
