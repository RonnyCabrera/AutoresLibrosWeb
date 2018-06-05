import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {PeticionInvalidaException} from "../exceptions/peticion-invalida.exception";
import * as Joi from 'joi';

@Injectable()
export class AutorPipe implements PipeTransform{
    constructor (private readonly _schema){
    }

    transform(valorAutorRequest: any, 
              metadata: ArgumentMetadata){
        const  {error}= Joi.validate(
            valorAutorRequest, 
            this._schema);
        if(error){
            throw  new PeticionInvalidaException(
                {
                    error: error,
                    mensaje: 'Datos Incorrectos Autor',
                },
                10
            )
        }else{
            return valorAutorRequest;
        }
    }
}