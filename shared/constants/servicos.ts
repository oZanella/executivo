import type { LucideIcon } from 'lucide-react'
import { Briefcase, CalendarClock, Mountain, PartyPopper, PlaneTakeoff, Route } from 'lucide-react'

export interface Servico {
    valor: string
    titulo: string
    descricao: string
    icone: LucideIcon
    itens: string[]
}

export const SERVICOS: Servico[] = [
    {
        valor: 'TRANSFER_AEROPORTO',
        titulo: 'Transfer aeroporto e rodoviária',
        descricao: 'Buscamos e levamos você com pontualidade, acompanhando o horário do voo.',
        icone: PlaneTakeoff,
        itens: ['Aeroporto Salgado Filho (POA)', 'Aeroporto de Caxias do Sul (CXJ)', 'Rodoviárias da região']
    },
    {
        valor: 'TRANSFER_TURISTICO',
        titulo: 'Transfer para locais turísticos',
        descricao: 'Conheça a Serra Gaúcha sem se preocupar com estrada, estacionamento ou horário.',
        icone: Mountain,
        itens: ['Gramado e Canela', 'Vale dos Vinhedos', 'Roteiros personalizados']
    },
    {
        valor: 'TRANSFER_EMPRESAS',
        titulo: 'Transfer para empresas',
        descricao: 'Transporte de executivos, clientes, visitantes e equipes com padrão profissional.',
        icone: Briefcase,
        itens: ['Recepção de clientes e visitantes', 'Reuniões e visitas técnicas', 'Atendimento recorrente']
    },
    {
        valor: 'VIAGENS',
        titulo: 'Viagens',
        descricao: 'Viagens pelo Rio Grande do Sul, Santa Catarina e Paraná, com conforto do início ao fim.',
        icone: Route,
        itens: ['Todo o Rio Grande do Sul', 'Santa Catarina e Paraná', 'Ida, volta ou ida e volta']
    },
    {
        valor: 'EVENTOS',
        titulo: 'Eventos e ocasiões especiais',
        descricao: 'Casamentos, formaturas, aniversários e eventos corporativos com elegância.',
        icone: PartyPopper,
        itens: ['Casamentos e formaturas', 'Feiras e congressos', 'Jantares e confraternizações']
    },
    {
        valor: 'DISPOSICAO',
        titulo: 'Motorista à disposição',
        descricao: 'Veículo e motorista reservados para você por hora, por período ou diária.',
        icone: CalendarClock,
        itens: ['Por hora ou diária', 'Agenda com várias paradas', 'Roteiro flexível']
    }
]
