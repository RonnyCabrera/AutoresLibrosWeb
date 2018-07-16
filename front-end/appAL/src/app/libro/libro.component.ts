import { Component, OnInit } from '@angular/core';
import {LibroServicio} from "../servicios/libro.servicio";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  libros = [];
  items = 4;
  paginas;
  librosMostrar;
  paginaActual: number = 1;

  constructor(private _libroServicio: LibroServicio) { }

  ngOnInit() {
    this._libroServicio.getLibros().subscribe(
      (result: any[]) => {
        this.libros = result;
        this.numeroPaginas();
        this.librosVisualizar();
      }
    );
  }

  numeroPaginas() {
    this.paginas = this.libros.length/this.items;
    if(!Number.isInteger(this.paginas)) {
      this.paginas = Number.parseInt(this.paginas + 1);
    }
  }

  librosVisualizar() {
    this.librosMostrar = this.libros.slice(this.paginaActual*this.items - this.items, this.paginaActual*this.items);
  }

  siguiente() {
    this.paginaActual += 1;
    this.librosVisualizar();
  }

  anterior() {
    this.paginaActual -= 1;
    this.librosVisualizar();
  }
}
