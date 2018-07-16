import {Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {AutorEntity} from "./autor.entity";
import {AutorData} from "./autor.data";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AutorService {

    constructor(
        @InjectRepository(AutorEntity)
        private readonly _autorRepository: Repository<AutorEntity>) {

    }

    crearAutor(){
        for(var autores in AutorData) {
            const autor = new AutorEntity();
            autor.nombres = AutorData[autores].nombres;
            autor.apellidos = AutorData[autores].apellidos;
            autor.fechaNacimiento = AutorData[autores].fechaNacimiento;
            autor.numeroLibros = AutorData[autores].numeroLibros;
            autor.ecuatoriano = AutorData[autores].ecuatoriano;
            autor.usuarios = AutorData[autores].usuariosIdUsuario;
            this._autorRepository.save(autor);
        }
        return this._autorRepository.find();
    }

    async listarTodos(): Promise<AutorEntity[]> {
        return await this._autorRepository.find();
    }

    async buscarAutores(nombresBuscar: string): Promise<AutorEntity[]> {
        return await this._autorRepository.find({ nombres: Like('%' + nombresBuscar + '%') });
    }

    /*obtenerUno(id) {
        const autorEncontrado = this.arregloAutores.find(autor => autor.id === id);
        return autorEncontrado;
    }*/

    /*editarUno(id, nombres, apellidos, fechaNacimiento, numeroLibros, ecuatoriano) {
        let index = this.arregloAutores.findIndex(autor => autor.id === id);
        let autorEditado = this.arregloAutores[index];
        autorEditado.nombres = nombres;
        autorEditado.apellidos = apellidos;
        autorEditado.fechaNacimiento = fechaNacimiento;
        autorEditado.numeroLibros = numeroLibros;
        autorEditado.ecuatoriano = ecuatoriano;

        return autorEditado;
    }*/
}