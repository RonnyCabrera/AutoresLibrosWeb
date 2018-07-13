import * as Joi from 'joi';

export const AUTOR_SCHEMA = Joi
    .object()
    .keys({
        idAutor: Joi
            .number(),
        nombres: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        apellidos: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        fechaNacimiento: Joi
            .date(),
        numeroLibros:Joi
            .number()
            .min(0),
        ecuatoriano:Joi
            .boolean(),
        usuarioId: Joi
            .number(),
    });