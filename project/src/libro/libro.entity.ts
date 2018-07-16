import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {AutorEntity} from "../autor/autor.entity";

@Entity('libro')
export class LibroEntity {
    @PrimaryGeneratedColumn()
    idLibro: number;

    @Column('int')
    ICBN: number;

    @Column({ length: 500 })
    nombre: string;

    @Column('int')
    numeroPaginas: number;

    @Column('int')
    edicion: number;

    @Column({ length: 500 })
    fechaPublicacion: string;

    @Column({ length: 500 })
    nombreEditorial: string;

    @ManyToOne(
        type => AutorEntity,
        autor => autor.libros
    )

    autores: number;
}