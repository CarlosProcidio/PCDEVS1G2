export interface UserModel {
    id: number,
    nome: string,    
    email: string,
    senha: string,
    telCel?: string,
    dataCriacao: Date
}