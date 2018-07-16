import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {LibroEntity} from "../libro/libro.entity";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('autor')
export class AutorEntity {
    @PrimaryGeneratedColumn()
    idAutor: number;

    @Column({ length: 500 })
    nombres: string;

    @Column({ length: 500 })
    apellidos: string;

    @Column({ length: 10 })
    fechaNacimiento: string;

    @Column('int')
    numeroLibros: number;

    @Column()
    ecuatoriano: boolean;

    @OneToMany(
        type => LibroEntity,
        libro => libro.autores
    )

    libros: number;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.autores
    )

    usuarios: number;
}