export interface Veiculo {
    valor: string
    modelo: string
    marca: string
    ano: number
    cor: string
    corHex: string
    categoria: string
    descricao: string
    passageiros: number
    itens: string[]
    /*
     * Foto em public/. As atuais são ILUSTRATIVAS (mesmo modelo, outra cor, licença livre).
     * Ao trocar pela foto do carro real, troque `imagem`, marque `ilustrativa: false` e remova o `credito`.
     */
    imagem: string
    ilustrativa: boolean
    credito?: { autor: string; licenca: string; url: string }
}

export const FROTA: Veiculo[] = [
    {
        valor: 'FASTBACK',
        modelo: 'Fastback',
        marca: 'Fiat',
        ano: 2026,
        cor: 'Azul',
        corHex: '#1f4fa3',
        categoria: 'SUV cupê',
        descricao: 'Mais espaço e conforto para viagens, passeios na Serra e transfer com bagagem.',
        passageiros: 4,
        itens: ['Porta-malas amplo', 'Ar-condicionado', 'Posição de dirigir elevada'],
        imagem: '/frota/fastback-2026-ilustrativo.jpg',
        ilustrativa: true,
        credito: {
            autor: 'Just a Man',
            licenca: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:Fiat_Fastback_Turbo_270_2026.jpg'
        }
    },
    {
        valor: 'ONIX',
        modelo: 'Onix',
        marca: 'Chevrolet',
        ano: 2019,
        cor: 'Prata',
        corHex: '#b8bcc2',
        categoria: 'Hatch',
        descricao: 'Compacto, confortável e econômico: ideal para trajetos na cidade, aeroporto e compromissos de trabalho.',
        passageiros: 4,
        itens: ['Ar-condicionado', 'Rodar suave e silencioso', 'Ótimo para o dia a dia'],
        imagem: '/frota/onix-2019-ilustrativo.jpg',
        ilustrativa: true,
        credito: {
            autor: 'Maxi-Napo-99',
            licenca: 'CC BY 4.0',
            url: 'https://commons.wikimedia.org/wiki/File:2019_Chevrolet_Onix_Joy_1.4_LS_Black_Edition.jpg'
        }
    }
]

export const MAX_PASSAGEIROS = Math.max(...FROTA.map((v) => v.passageiros))
