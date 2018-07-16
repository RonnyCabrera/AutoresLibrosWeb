import {Injectable} from "@nestjs/common";
import {Like, Repository} from "typeorm";
import {LibroEntity} from "./libro.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {LibroData} from "./libro.data";

@Injectable()
export class LibroService {

    constructor(
        @InjectRepository(LibroEntity)
        private readonly _libroRepository: Repository<LibroEntity>) {

    }

    crearLibro(){
        for(var libros in LibroData) {
            const libro = new LibroEntity();
            libro.ICBN = LibroData[libros].ICBN;
            libro.nombre = LibroData[libros].nombre;
            libro.numeroPaginas = LibroData[libros].numeroPaginas;
            libro.edicion = LibroData[libros].edicion;
            libro.fechaPublicacion = LibroData[libros].fechaPublicacion;
            libro.nombreEditorial = LibroData[libros].nombreEditorial;
            libro.autores = LibroData[libros].autoresIdAutor;
            this._libroRepository.save(libro);
        }
        return this._libroRepository.find();
    }

    async listarTodos(): Promise<LibroEntity[]> {
        return await this._libroRepository.find();
    }

    async buscarLibros(nombreBuscar: string): Promise<LibroEntity[]> {
        return await this._libroRepository.find({ nombre: Like('%' + nombreBuscar + '%') });
    }
    /*obtenerUno(id){
        const libroEncontrado = this.arregloLibros.find(libro => libro.id === id);
        return libroEncontrado;
    }*/

    /*editarUno(id, ICBN, nombre, numeroPaginas, edicion, fechaPublicacion, nombreEditorial, autorId){
        let autorEditadi = this.obtenerUno(id);

        autorEditadi.ICBN = ICBN;
        autorEditadi.nombre = nombre;
        autorEditadi.numeroPaginas = numeroPaginas;
        autorEditadi.edicion = edicion;
        autorEditadi.fechaPublicacion = fechaPublicacion;
        autorEditadi.nombreEditorial = nombreEditorial;
        autorEditadi.autorId = autorId;

        return autorEditadi;
    }*/
}