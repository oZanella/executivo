# Site — Transporte Executivo (Farroupilha e Serra Gaúcha)

Landing page com serviços, transfer turístico, atendimento a empresas, regiões atendidas,
agendamento via WhatsApp e FAQ.

```bash
npm install
cp .env.example .env.local   # ajuste NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:8020
```

## Antes de publicar
Edite `shared/constants/empresa.ts`:
- `nome` — nome comercial da empresa
- `instagram` — @ do perfil (habilita links no rodapé e na seção de depoimentos)
- `email` — opcional
- `imagemHero` — foto real dos veículos em `public/` (ex.: `/hero.jpg`)

E revise `regioes.ts` (cidades atendidas) e `depoimentos.ts` (apenas depoimentos reais).

Deploy recomendado: Vercel (mesmo fluxo do Safeloc), configurando `NEXT_PUBLIC_SITE_URL`.
