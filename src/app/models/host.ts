export class Host {
    id: number;
    host_nome: string;
    host_nomeTabela_snmpGet: string;
    host_ip: string;
    host_porta: number;
    host_observacoes?: string;
    host_status: boolean;        
    host_community: string;
    host_template: number[];
}