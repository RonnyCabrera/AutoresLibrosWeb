import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {

  }
}
