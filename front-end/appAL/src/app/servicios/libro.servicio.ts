import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LibroServicio {

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

  getLibros() {
    let header = LibroServicio.getCommonHeaders();
    return this.http.get("http://localhost:3000/Libro",{headers: header});
  }

  getLibroBuscar(nombreBuscar) {
    let header = LibroServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Libro/${nombreBuscar}` , {headers: header});
  }
}
