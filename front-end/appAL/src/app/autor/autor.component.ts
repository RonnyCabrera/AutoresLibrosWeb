import { Component, OnInit } from '@angular/core';
import {AutorServicio} from "../servicios/autor.servicio";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  autores = [];
  items = 2;
  paginas;
  autoresMostrar;
  paginaActual: number = 1;

  constructor(private _autorServicio: AutorServicio) { }

  ngOnInit() {
    this._autorServicio.getAutores().subscribe(
      (result: any[]) => {
        this.autores = result;
        this.numeroPaginas();
        this.autoresVisualizar();
      }
    );
  }

  numeroPaginas() {
    this.paginas = this.autores.length/this.items;
    if(!Number.isInteger(this.paginas)) {
      this.paginas = Number.parseInt(this.paginas + 1);
    }
  }

  autoresVisualizar() {
    this.autoresMostrar = this.autores.slice(this.paginaActual*this.items - this.items, this.paginaActual*this.items);
  }

  siguiente() {
    this.paginaActual += 1;
    this.autoresVisualizar();
  }

  anterior() {
    this.paginaActual -= 1;
    this.autoresVisualizar();
  }
}
