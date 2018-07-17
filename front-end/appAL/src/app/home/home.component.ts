import {Component, OnInit} from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";
import {AutorServicio} from "../servicios/autor.servicio";
import {LibroServicio} from "../servicios/libro.servicio";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UsuarioServicio, AutorServicio, LibroServicio]
})
export class HomeComponent implements OnInit {

  nombreBuscar;

  usuarios = [];
  itemsUsuarios = 4;
  paginasUsuarios;
  usuariosMostrar;
  paginaActualUsuario: number = 1;

  autores = [];
  itemsAutores = 2;
  paginasAutores;
  autoresMostrar;
  paginaActualAutor: number = 1;

  libros = [];
  itemsLibros = 4;
  paginasLibros;
  librosMostrar;
  paginaActualLibro: number = 1;

  constructor(private _usuarioServicio: UsuarioServicio,
              private _autorServicio: AutorServicio,
              private _libroServicio: LibroServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarios().subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    )

    this._autorServicio.getAutores().subscribe(
      (result: any[]) => {
        this.autores = result;
        this.paginasAutores = this.numeroPaginas(this.autores, this.itemsAutores);
        this.autoresMostrar = this.datosVisualizar(this.autores, this.paginaActualAutor, this.itemsAutores);
      }
    )

    this._libroServicio.getLibros().subscribe(
      (result: any[]) => {
        this.libros = result;
        this.paginasLibros = this.numeroPaginas(this.libros, this.itemsLibros);
        this.librosMostrar = this.datosVisualizar(this.libros, this.paginaActualLibro, this.itemsLibros);
      }
    )
  }

  buscar() {
    this._usuarioServicio.getUsuarioBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.paginasUsuarios = this.numeroPaginas(this.usuarios, this.itemsUsuarios);
        this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios);
      }
    );

    this._autorServicio.getAutorBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.autores = result;
        this.paginasAutores = this.numeroPaginas(this.autores, this.itemsAutores);
        this.autoresMostrar = this.datosVisualizar(this.autores, this.paginaActualAutor, this.itemsAutores);
      }
    );

    this._libroServicio.getLibroBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.libros = result;
        this.paginasLibros = this.numeroPaginas(this.libros, this.itemsLibros);
        this.librosMostrar = this.datosVisualizar(this.libros, this.paginaActualLibro, this.itemsLibros);
      }
    );
  }

  numeroPaginas(lista: any[], items): number {
    let paginas = lista.length/items;
    if(!Number.isInteger(paginas)) {
      paginas = paginas + 1;
      paginas = Number.parseInt(paginas.toString());
    }
    return paginas;
  }

  datosVisualizar(lista: any[], paginaActual, items): any [] {
    let usuariosMostrar = lista.slice(paginaActual*items - items, paginaActual*items);
    return usuariosMostrar;
  }

  siguienteUsuario() {
    this.paginaActualUsuario += 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  anteriorUsuario() {
    this.paginaActualUsuario -= 1;
    this.usuariosMostrar = this.datosVisualizar(this.usuarios, this.paginaActualUsuario, this.itemsUsuarios)
  }

  siguienteAutor() {
    this.paginaActualAutor += 1;
    this.autoresMostrar = this.datosVisualizar(this.autores, this.paginaActualAutor, this.itemsAutores)
  }

  anteriorAutor() {
    this.paginaActualAutor -= 1;
    this.autoresMostrar = this.datosVisualizar(this.autores, this.paginaActualAutor, this.itemsAutores)
  }

  siguienteLibro() {
    this.paginaActualLibro += 1;
    this.librosMostrar = this.datosVisualizar(this.libros, this.paginaActualLibro, this.itemsLibros)
  }

  anteriorLibro() {
    this.paginaActualLibro -= 1;
    this.librosMostrar = this.datosVisualizar(this.libros, this.paginaActualLibro, this.itemsLibros)
  }
}
