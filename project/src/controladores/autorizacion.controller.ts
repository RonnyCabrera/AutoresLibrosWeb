import {Body, Controller, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('iniciarSesion')
    iniciarSesion(@Body() bodyParams,
                  @Res () response,
                  @Req () request) {

        let usuario = bodyParams.usuario;
        let password = bodyParams.password;
        if(usuario && password){
            if(usuario === 'adrianeguez' && password === '12345678910'){
                const paramCookie = {
                    nombreCookie: 'token',
                    valorCookie: usuario.toString(),
                };

                return response
                    .cookie(
                        paramCookie.nombreCookie,
                        paramCookie.valorCookie)
                    .send({
                        mensaje: 'OK'});
            }
            else {
                response.send({mensaje:'Usuario o Paswword Incorrectos'});
            }
        }
        else {
            response.send({mensaje:'Ingrese parametros'});
        }
    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response){

        const paramCookie = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };


        return response
            .cookie(
                paramCookie.nombreCookie,
                paramCookie.valorCookie)
            .send({
                mensaje: 'Usted salio del sistema'});
    }
}