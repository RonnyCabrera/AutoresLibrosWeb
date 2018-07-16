import { Component, OnInit } from '@angular/core';
import {AutorServicio} from "../servicios/autor.servicio";

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  autores = []

  constructor(private _autorServicio: AutorServicio) { }

  ngOnInit() {
    this._autorServicio.getAutores().subscribe(
      (result: any[]) => {
        this.autores = result;
      }
    );
  }
}
