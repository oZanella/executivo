import tailwindcssAnimate from 'tailwindcss-animate'
import type { Config } from 'tailwindcss'

/*
 * Mesma base de tokens do Safeloc (cores via variáveis HSL em globals.css), com paleta própria
 * (azul-marinho + dourado) e escala tipográfica estendida até 5xl para os títulos da landing page.
 */
const config: Config = {
    darkMode: ['class'],
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
            screens: { '2xl': '1200px' }
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'Georgia', 'serif']
            },
            fontSize: {
                '3xs': 'max(10px, 0.6875rem)',
                '2xs': 'max(11px, 0.75rem)',
                xs: ['0.8125rem', { lineHeight: '1.125rem' }],
                sm: ['0.9375rem', { lineHeight: '1.375rem' }],
                base: ['1.0625rem', { lineHeight: '1.625rem' }],
                lg: ['1.1875rem', { lineHeight: '1.75rem' }],
                xl: ['1.3125rem', { lineHeight: '1.875rem' }],
                '2xl': ['1.5625rem', { lineHeight: '2.125rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
                '4xl': ['2.375rem', { lineHeight: '2.75rem' }],
                '5xl': ['3.125rem', { lineHeight: '3.5rem' }]
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                navy: {
                    DEFAULT: 'hsl(var(--navy))',
                    foreground: 'hsl(var(--navy-foreground))',
                    muted: 'hsl(var(--navy-muted))'
                },
                gold: 'hsl(var(--gold))',
                whatsapp: 'hsl(var(--whatsapp))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [tailwindcssAnimate]
}
export default config
