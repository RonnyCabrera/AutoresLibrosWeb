import { Component, OnInit } from '@angular/core';
import {UsuarioServicio} from "../servicios/usuario.servicio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioServicio]
})
export class LoginComponent implements OnInit {

  //usuario = "";
  //password = "";

  constructor(private _usuarioServicio: UsuarioServicio,
              private _router: Router) { }

  ngOnInit() {
    /*this._usuarioServicio.getUsuarioLogin(this.usuario, this.password).subscribe(
      (result: any) => {
        console.log(result);
      }
    )*/
    this._router.navigate(['/home']);
  }
}
