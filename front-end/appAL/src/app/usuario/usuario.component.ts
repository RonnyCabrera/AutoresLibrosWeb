import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios = [];
  items = 4;
  paginas;
  usuariosMostrar;
  paginaActual: number = 1;

  constructor(private _usuarioServicio: UsuarioServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarios().subscribe(
      (result: any[]) => {
        this.usuarios = result;
        this.numeroPaginas();
        this.usuariosVisualizar();
      }
    );
  }

  numeroPaginas() {
    this.paginas = this.usuarios.length/this.items;
    if(!Number.isInteger(this.paginas)) {
      this.paginas = Number.parseInt(this.paginas + 1);
    }
  }

  usuariosVisualizar() {
    this.usuariosMostrar = this.usuarios.slice(this.paginaActual*this.items - this.items, this.paginaActual*this.items);
  }

  siguiente() {
    this.paginaActual += 1;
    this.usuariosVisualizar();
  }

  anterior() {
    this.paginaActual -= 1;
    this.usuariosVisualizar();
  }
}
