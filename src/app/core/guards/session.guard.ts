import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkCokieeSession();
  }

  checkCokieeSession(): boolean {
    try {
      /* Check retorna un dato boolean si existe una cokiee */
      const token: boolean = this.cookieService.check("token");
      if (!token) {
        //navega al inicio porque no está inciando session
        this.router.navigate(["/", "auth"]);
      }
      return true;
    } catch (error) {
      console.log("Error", error);
      return false;
    }
  }
}
