import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./modules/home/home.module";
import { FavoritesModule } from "@modules/favorites/favorites.module";
import { HomePageComponent } from "./modules/home/pages/home-page/home-page.component";

const routes: Routes = [
  /* Ruta perezosa */
  {
    path: "auth",
    loadChildren: () =>
      import("@modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "",
    component: HomePageComponent,
    loadChildren: () =>
      import("./modules/home/home.module").then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
