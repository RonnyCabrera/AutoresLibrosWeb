import {Injectable} from "@nestjs/common";

@Injectable()
export class LibroService {

    arregloLibros: Libro[] = [];

    crearLibro(libro: Libro): Libro[]{
        this.arregloLibros.push(libro);
        return this.arregloLibros;
    }

    listarTodos(){
        return this.arregloLibros;
    }

    obtenerUno(id){
        const libroEncontrado = this.arregloLibros.find(libro => libro.id === id);
        return libroEncontrado;
    }

    editarUno(id, ICBN, nombre, numeroPaginas, edicion, fechaPublicacion, nombreEditorial, autorId){
        let autorEditadi = this.obtenerUno(id);

        autorEditadi.ICBN = ICBN;
        autorEditadi.nombre = nombre;
        autorEditadi.numeroPaginas = numeroPaginas;
        autorEditadi.edicion = edicion;
        autorEditadi.fechaPublicacion = fechaPublicacion;
        autorEditadi.nombreEditorial = nombreEditorial;
        autorEditadi.autorId = autorId;

        return autorEditadi;
    }

}


export class Libro {

    constructor(
        public id: number,
        public ICBN: number,
        public nombre: string,
        public numeroPaginas: number,
        public edicion: number,
        public fechaPublicacion: string,
        public nombreEditorial: string,
        public autorId: number,
    ){};
}