import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { IconeInstagram } from '@/components/site/icones'
import { EMPRESA, linkInstagram, linkWhatsapp } from '@/shared/constants/empresa'
import { SERVICOS } from '@/shared/constants/servicos'

export function Rodape() {
    const instagram = linkInstagram()

    return (
        <footer className="bg-navy text-navy-foreground">
            <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
                <div>
                    <Logo />
                    <p className="mt-4 max-w-sm text-sm text-navy-muted">{EMPRESA.descricao}</p>
                </div>

                <div>
                    <h2 className="text-2xs font-bold uppercase tracking-[0.2em] text-gold">Serviços</h2>
                    <ul className="mt-4 space-y-2">
                        {SERVICOS.map((s) => (
                            <li key={s.valor}>
                                <a href="#servicos" className="text-sm text-navy-muted transition-colors hover:text-white">
                                    {s.titulo}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xs font-bold uppercase tracking-[0.2em] text-gold">Contato</h2>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a
                                href={linkWhatsapp()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-navy-muted transition-colors hover:text-white"
                            >
                                <MessageCircle className="size-4 text-gold" />
                                {EMPRESA.telefoneExibicao}
                            </a>
                        </li>
                        {instagram && (
                            <li>
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-navy-muted transition-colors hover:text-white"
                                >
                                    <IconeInstagram className="size-4 text-gold" />@{EMPRESA.instagram}
                                </a>
                            </li>
                        )}
                        {EMPRESA.email && (
                            <li>
                                <a
                                    href={`mailto:${EMPRESA.email}`}
                                    className="flex items-center gap-2 text-navy-muted transition-colors hover:text-white"
                                >
                                    <Mail className="size-4 text-gold" />
                                    {EMPRESA.email}
                                </a>
                            </li>
                        )}
                        <li className="flex items-center gap-2 text-navy-muted">
                            <MapPin className="size-4 text-gold" />
                            {EMPRESA.cidadeBase} - {EMPRESA.estado} e região
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/10">
                <p className="container py-5 text-center text-2xs text-navy-muted">
                    © {new Date().getFullYear()} {EMPRESA.nome}. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
