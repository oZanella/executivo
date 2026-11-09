export interface Depoimento {
    nome: string
    contexto: string
    texto: string
}

/*
 * Adicione aqui apenas depoimentos REAIS de clientes (com autorização), por exemplo os que já estão nos destaques
 * "Depoimentos" do Instagram. Enquanto a lista estiver vazia, a seção mostra um convite para ver o Instagram.
 *
 * Exemplo de formato:
 * { nome: 'Nome do cliente', contexto: 'Transfer para o aeroporto', texto: 'Texto do depoimento.' }
 */
export const DEPOIMENTOS: Depoimento[] = []
