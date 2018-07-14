import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {UsuarioData} from "./usuario.data";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>,
    ) {}

    crearUsuario(usuario: UsuarioEntity) {
        for (var usuarios in UsuarioData) {
            usuario.user = UsuarioData[usuarios].user;
            usuario.password = UsuarioData[usuarios].password;
            this._usuarioRepository.save(usuario);
        }
    }

}