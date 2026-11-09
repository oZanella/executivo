import type { Metadata, Viewport } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { EMPRESA } from '@/shared/constants/empresa'
import { CIDADES_ATENDIDAS, ESTADOS_VIAGENS } from '@/shared/constants/regioes'

const fonteSans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const fonteDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:8020'
const titulo = `${EMPRESA.nome} | Transporte executivo em ${EMPRESA.cidadeBase} e Serra Gaúcha`

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: titulo,
    description: EMPRESA.descricao,
    keywords: [
        'transporte executivo',
        'transfer aeroporto',
        'transfer Farroupilha',
        'transfer Serra Gaúcha',
        'transfer Gramado',
        'motorista particular',
        'transfer corporativo',
        'Caxias do Sul',
        'Bento Gonçalves'
    ],
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: siteUrl,
        siteName: EMPRESA.nome,
        title: titulo,
        description: EMPRESA.descricao
    },
    alternates: { canonical: '/' }
}

export const viewport: Viewport = {
    themeColor: '#0c1220'
}

const dadosEstruturados = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: EMPRESA.nome,
    description: EMPRESA.descricao,
    url: siteUrl,
    telephone: `+${EMPRESA.whatsapp}`,
    address: {
        '@type': 'PostalAddress',
        addressLocality: EMPRESA.cidadeBase,
        addressRegion: EMPRESA.estado,
        addressCountry: 'BR'
    },
    paymentAccepted: 'Pix, Cartão',
    areaServed: [
        ...CIDADES_ATENDIDAS.map((cidade) => ({ '@type': 'City', name: cidade })),
        ...ESTADOS_VIAGENS.map((estado) => ({ '@type': 'State', name: estado }))
    ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={`${fonteSans.variable} ${fonteDisplay.variable}`} suppressHydrationWarning>
            <body className="antialiased">
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
                />
                {children}
                <Analytics />
            </body>
        </html>
    )
}
