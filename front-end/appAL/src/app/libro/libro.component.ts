import { Component, OnInit } from '@angular/core';
import {LibroServicio} from "../servicios/libro.servicio";

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  libros = []

  constructor(private _libroServicio: LibroServicio) { }

  ngOnInit() {
    this._libroServicio.getLibros().subscribe(
      (result: any[]) => {
        this.libros = result;
      }
    );
  }
}
