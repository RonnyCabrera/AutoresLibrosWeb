import {Body, Controller, Get, HttpStatus, Param, Post, Put, Req, Res} from "@nestjs/common";
import {AutorService, Autor} from "./autor.service";
import {AutorPipe} from "../pipes/autor.pipe";
import {AUTOR_SCHEMA} from "./autor.schema";


@Controller('Autor')
export  class AutorController {

    constructor(private  _autorService: AutorService){

    }

    @Get()
    listarTodos(@Res () response,
                @Req () request){
        var arregloAutores = this._autorService.listarTodos();
        if(Object.keys(arregloAutores).length === 0){
            return response.send({
                mensaje:'No existe ningun Autor',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(arregloAutores);
        }
    }

    @Post()
    crearAutor(@Body(new AutorPipe(AUTOR_SCHEMA)) bodyParams) {
            const autorNuevo = new Autor(
                bodyParams.id,
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.numeroLibros,
                bodyParams.ecuatoriano,
            );
            return this._autorService.crearAutor(autorNuevo);
    }

    @Get('/:id')
    obtenerUno(@Res () response,
                    @Req () request,
                    @Param() paramParams){

        const autor = this._autorService.obtenerUno(paramParams.id);
        if (autor) {
            return response.send(autor);
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
              @Body(new AutorPipe(AUTOR_SCHEMA)) bodyParams){
        if(this._autorService.obtenerUno(paramParams.id)) {
            const autor = this._autorService.editarUno(paramParams.id,
                bodyParams.nombres,
                bodyParams.apellidos,
                bodyParams.fechaNacimiento,
                bodyParams.numeroLibros,
                bodyParams.ecuatoriano);
            return response.send(autor);
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

