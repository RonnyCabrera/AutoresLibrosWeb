import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginService {

  constructor(private  http: HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    return headers;
  }

  getUsuario(user: string, password: string) {
    let header = LoginService.getCommonHeaders();
    return this.http.post("localhost:3000/Usuario", { user: user, password: password})
  }

}
