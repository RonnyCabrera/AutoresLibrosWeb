import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {LibroService, Libro} from "./libro.service";
import {LibroPipe} from "../pipes/libro.pipe";
import {LIBRO_SCHEMA} from "./libro.schema";

@Controller('Libro')
export class LibroController {

    constructor(private _libroService: LibroService){

    }

    @Get()
    listarTodos(@Res () response,
                @Req () request){
        var arregloLibros = this._libroService.listarTodos();
        if(Object.keys(arregloLibros).length === 0){
            return response.send({
                mensaje:'No existe ningun Autor',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloLibros);
        }
    }

    @Post()
    crearLibro(@Body(new LibroPipe(LIBRO_SCHEMA)) bodyParams) {
        const libroNuevo = new Libro(
            bodyParams.id,
            bodyParams.ICBN,
            bodyParams.nombre,
            bodyParams.numeroPaginas,
            bodyParams.edicion,
            bodyParams.fechaPublicacion,
            bodyParams.nombreEditorial,
            bodyParams.autorId
        );
        return this._libroService.crearLibro(libroNuevo);
    }

    @Get('/:id')
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
    }

    @Put('/:id')
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
    }
}