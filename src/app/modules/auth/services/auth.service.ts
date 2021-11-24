import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly url = environment.api;
  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentail(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.url}/auth/login`, body).pipe(
      tap((responseOk: any) => {
        /* Se asigna el token a la cookie */
        const { tokenSession, data } = responseOk;
        this.cookie.set("token", tokenSession, 4, "/");
      })
    );
  }
}
