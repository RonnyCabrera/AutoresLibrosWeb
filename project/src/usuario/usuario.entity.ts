import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AutorEntity} from "../autor/autor.entity";

@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    password: string;

    @OneToMany(
        type => AutorEntity,
        autor => autor.usuarios
    )

    autores: [AutorEntity];
}