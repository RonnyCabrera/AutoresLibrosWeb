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
  items = 4;
  paginas;
  usuariosMostrar;
  paginaActual: number = 1;

  constructor(private _usuarioServicio: UsuarioServicio) { }

  ngOnInit() {
    this._usuarioServicio.getUsuarioBuscar(this.nombreBuscar).subscribe(
      (result: any[]) => {
        this.usuarios = result;
        console.log(this.nombreBuscar);
        console.log(this.usuarios);
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
