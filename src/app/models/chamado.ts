export interface Chamado{
    idChamado?: any;
    prioridade: string;
    status: string;
    observacoes: string;
    titulo: string;
    tecnico?: any;
    cliente?: any;
    nomeCliente: string;
    nomeTecnico: string;
    valor?: any;
    dataAbertura?: string;
    dataFechamento?: string;
}