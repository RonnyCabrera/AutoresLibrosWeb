import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';
@Injectable()
export class LibroPipe implements PipeTransform{
    constructor (private readonly _schema){
    }
    transform(valorLibroRequest: any,
              metadata: ArgumentMetadata){
        const {error} = Joi.
        validate(valorLibroRequest,
            this._schema)
        if(error){
            throw  new PeticionInvalidaException(
                {
                    erorr: error,
                    mensaje: 'Datos Incorrectos Libro',
                },
                10
            )
        } else{
            return valorLibroRequest;
        }
    }
}