export interface Destino {
    nome: string
    cidade: string
    descricao: string
}

export const DESTINOS: Destino[] = [
    {
        nome: 'Gramado e Canela',
        cidade: 'Região das Hortênsias',
        descricao: 'Rua Coberta, Lago Negro, Catedral de Pedra e Cascata do Caracol.'
    },
    {
        nome: 'Vale dos Vinhedos',
        cidade: 'Bento Gonçalves',
        descricao: 'Vinícolas, degustações e gastronomia sem precisar dirigir na volta.'
    },
    {
        nome: 'Caminhos de Pedra',
        cidade: 'Bento Gonçalves',
        descricao: 'Casas centenárias da imigração italiana, cantinas e artesanato.'
    },
    {
        nome: 'Santuário de Caravaggio',
        cidade: 'Farroupilha',
        descricao: 'Um dos maiores centros de peregrinação do Sul do Brasil.'
    },
    {
        nome: 'Passeio de Maria Fumaça',
        cidade: 'Bento Gonçalves e Garibaldi',
        descricao: 'Levamos até a estação e buscamos no fim do passeio de trem.'
    },
    {
        nome: 'Cânions de Cambará do Sul',
        cidade: 'Campos de Cima da Serra',
        descricao: 'Itaimbezinho e Fortaleza: paisagens únicas em um dia inteiro de passeio.'
    }
]
