import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {LibroService} from "./libro.service";
import {LibroEntity} from "./libro.entity";

@Controller('Libro')
export class LibroController {

    constructor(private _libroService: LibroService){

    }

    @Post()
    crearLibro() {
        return this._libroService.crearLibro();
    }

    @Get()
    async listarTodos(@Res () response,
                      @Req () request) {
        const libros = await this._libroService.listarTodos();
        if(Object.keys(libros).length === 0){
            return response.send({
                mensaje:'No existe ningun Libro',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(libros);
        }
    }

    @Get('/:nombreBuscar')
    async buscarLibros(
        @Param() paramParams,
        @Res() response
    ) {
        const libros = await this._libroService.buscarLibros(paramParams.nombreBuscar);
        return response.status(202).send(libros);
    }

    /*@Get('/:id')
    obtenerUno(@Res () response,
               @Req () request,
               @Param() paramParams){

        const libro = this._libroService.obtenerUno(paramParams.id);
        if (libro) {
            return response.send(libro);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Autor No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }*/

    /*@Put('/:id')
    editarUno(@Res () response,
              @Req () request,
              @Param() paramParams,
              @Body(new LibroPipe(LIBRO_SCHEMA)) bodyParams){
        if(this.obtenerUno(response, request, paramParams)) {
            const libro = this._libroService.editarUno(paramParams.id,
                bodyParams.ICBN,
                bodyParams.nombre,
                bodyParams.numeroPaginas,
                bodyParams.edicion,
                bodyParams.fechaPublicacion,
                bodyParams.nombreEditorial,
                bodyParams.autorId
            );
            return response.send(libro);
        }
        else {
            return response
                .status(400)
                .send({
                    mensaje: 'Autor No Existe',
                    statusCode: HttpStatus.NOT_FOUND,
                });
        }
    }*/
}