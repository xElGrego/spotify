import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.css"],
})
export class AuthPageComponent implements OnInit {
  /* Se inicializa la variable */
  formLogin: FormGroup = new FormGroup({});

  errorSesion: boolean = false;

  constructor(
    private authService: AuthService,
    private cokkie: CookieService
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this.authService.sendCredentail(email, password).subscribe(
      (e) => {
        this.formLogin = e;
        console.log("Sesion correcta", e);
      },
      (error) => {
        this.errorSesion = true;
        console.log(error);
      }
    );
  }
}
