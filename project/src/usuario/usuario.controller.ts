import {Controller, Post} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('Usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService){

    }

    @Post()
    crearUsuario() {
        const usuario = new UsuarioEntity();
        return this._usuarioService.crearUsuario(usuario);
    }
}