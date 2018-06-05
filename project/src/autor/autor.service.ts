import {Injectable} from "@nestjs/common";

@Injectable()
export class AutorService {

    arregloAutores: Autor[] = [];

    crearAutor(autor: Autor): Autor[]{
        this.arregloAutores.push(autor);
        return this.arregloAutores;
    }

    listarTodos() {
        return this.arregloAutores;
    }

    obtenerUno(id) {
        const autorEncontrado = this.arregloAutores.find(autor => autor.id === id);
        return autorEncontrado;
    }

    editarUno(id, nombres, apellidos, fechaNacimiento, numeroLibros, ecuatoriano) {
        let index = this.arregloAutores.findIndex(autor => autor.id === id);
        let autorEditado = this.arregloAutores[index];
        autorEditado.nombres = nombres;
        autorEditado.apellidos = apellidos;
        autorEditado.fechaNacimiento = fechaNacimiento;
        autorEditado.numeroLibros = numeroLibros;
        autorEditado.ecuatoriano = ecuatoriano;

        return autorEditado;
    }
}


export class Autor {

    constructor(
        public id: number,
        public nombres: string,
        public apellidos: string,
        public fechaNacimiento: string,
        public numeroLibros: number,
        public ecuatoriano: boolean,
    ){};

}