import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuarios = [];

  constructor(private _usuarioServicio: UsuarioServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarios().subscribe(
      (result: any[]) => {
        this.usuarios = result;
      }
    );
  }
}
