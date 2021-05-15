import { UserDTO } from './../dto/user-dto';
import { UserModel } from '../model/user-model';
export class UserMapper {

    converterDTOParaModel(dto: UserDTO): UserModel{ 
        return {
            id: dto.id ? dto.id : 0,
            nome: dto.nome ? dto.nome : '',
            email: dto.email ? dto.email : '',
            senha: dto.senha ? dto.senha : '',
            telCel: dto.telCel,
            dataCriacao: new Date()
        };
    }

    converterModelParaDTO(model: UserModel): UserDTO{ 
        return {
            id: model.id,
            nome: model.nome,
            email: model.email,
            senha: model.senha,            
            telCel: model.telCel
        };
    }
   
}
