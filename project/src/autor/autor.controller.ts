import {Controller, Get, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorEntity} from "./autor.entity";


@Controller('Autor')
export  class AutorController {

    constructor(private _autorService: AutorService){

    }

    @Post()
    crearAutor() {
        return this._autorService.crearAutor();
    }

    @Get()
    async listarTodos(@Res () response,
                      @Req () request) {
        const autores = await this._autorService.listarTodos();
        if(Object.keys(autores).length === 0){
            return response.send({
                mensaje:'No existe ningun Autor',
                estado: HttpStatus.NOT_FOUND,
            });
        } else{
            return response.status(202).send(autores);
        }
    }

    @Get('/:nombresBuscar')
    async buscarAutores(
        @Param() paramParams,
        @Res() response
    ) {
        const autores = await this._autorService.buscarAutores(paramParams.nombresBuscar);
        return response.status(202).send(autores);
    }

    /*@Get('/:id')
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
    }*/

    /*@Put('/:id')
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
    }*/
}

