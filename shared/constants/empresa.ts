/*
 * Dados do negócio usados em todo o site. Ajuste aqui (nome, Instagram, e-mail...) e o site inteiro acompanha.
 * Campos marcados com TODO ainda precisam ser confirmados.
 */
export const EMPRESA = {
    // TODO: confirmar o nome comercial
    nome: 'Confort Executivo',
    slogan: 'Experiência VIP no seu transporte',
    descricao:
        'Transporte executivo em Farroupilha e na Serra Gaúcha: transfer para aeroportos, passeios turísticos, viagens e atendimento a empresas, com carros confortáveis e motorista profissional.',
    cidadeBase: 'Farroupilha',
    estado: 'RS',
    // Formato internacional, só números: 55 + DDD + número
    whatsapp: '5554996638836',
    telefoneExibicao: '(54) 99663-8836',
    // @ do Instagram, sem a URL
    instagram: 'olendutra',
    pagamento: 'Pix, cartão ou parcelado',
    // TODO: preencher se houver e-mail de contato
    email: '',
    /*
     * Foto de destaque do hero (ex.: '/hero.jpg' colocada em public/). Sem foto, o hero usa o fundo em gradiente.
     */
    imagemHero: null as string | null
} as const

export const MENSAGEM_WHATSAPP_PADRAO =
    'Olá, estou entrando em contato para orçar sobre um Transporte Executivo, podemos ver sobre?'

export function linkWhatsapp(mensagem: string = MENSAGEM_WHATSAPP_PADRAO) {
    return `https://wa.me/${EMPRESA.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

export function linkInstagram() {
    return EMPRESA.instagram ? `https://instagram.com/${EMPRESA.instagram}` : null
}
