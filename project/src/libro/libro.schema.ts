import * as Joi from 'joi';

export const LIBRO_SCHEMA = Joi
    .object()
    .keys({
        idLibro: Joi
            .number(),
        ICBN: Joi
            .number(),
        nombre: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        numeroPaginas: Joi
            .number(),
        edicion: Joi
            .number(),
        fechaPublicacion: Joi
            .date(),
        nombreEditorial: Joi
            .string()
            .regex(/^[a-zA-Z]{3,30}$/)
            .min(3)
            .max(30),
        autorId: Joi
            .number(),
    });