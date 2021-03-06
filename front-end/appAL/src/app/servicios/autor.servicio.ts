import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AutorServicio {

  constructor(private http:HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getAutores() {
    let header = AutorServicio.getCommonHeaders();
    return this.http.get("http://localhost:3000/Autor",{headers: header});
  }

  getAutorBuscar(nombreBuscar) {
    let header = AutorServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Autor/${nombreBuscar}` , {headers: header});
  }
}
