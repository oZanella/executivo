# Executivo — Site de transporte executivo

Landing page de uma empresa de transporte executivo em Farroupilha/RS e Serra Gaúcha
(transfer aeroporto, transfer turístico, transfer para empresas, viagens, eventos e motorista à disposição).
Criado sobre a mesma base do `web` do Safeloc (Next.js 15 + React 18 + Tailwind 3 + componentes estilo shadcn).

## Comunicação
- Responder sempre em Português do Brasil (PT-BR).
- Ao terminar: apenas o que mudou + um resumo.

## Como rodar
```bash
npm install
npm run dev      # porta 8020
npm run build
```

## Estrutura
```
app/                 # layout (fontes, SEO, JSON-LD), page.tsx (monta as seções), sitemap, robots, icon.svg
components/ui/       # Button, Input, Textarea, Label, Card, ThemeToggle (mesmos padrões do Safeloc)
components/site/     # uma seção da landing por arquivo (hero, servicos, turismo, empresas, regioes...)
shared/constants/    # TODO o conteúdo editável: empresa.ts (nome, WhatsApp, Instagram), servicos, regioes,
                     # destinos, depoimentos, faq
lib/utils.ts         # cn()
```

## Regras
- Conteúdo do negócio fica em `shared/constants/` — não espalhar textos/telefones pelos componentes.
- Não há backend: o formulário de agendamento (react-hook-form + zod) monta a mensagem e abre o WhatsApp.
- `DEPOIMENTOS` só com depoimentos reais e autorizados; lista vazia esconde os cards.
- Seções escuras usam os tokens `navy`/`gold` (ficam escuras nos dois temas); o resto usa os tokens do tema.
- Nunca usar `any`; nunca usar `console.log` sem pedido; tipografia pela escala do `tailwind.config.ts`.
