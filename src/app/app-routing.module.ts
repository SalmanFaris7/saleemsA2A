import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MenuPageComponent } from "./pages/menu-page/menu-page.component";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { CartPageComponent } from "./pages/cart-page/cart-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Redirect to home
  { path: "home", component: HomePageComponent }, // Home route
  { path: "menu", component: MenuPageComponent }, // About route
  { path: "cart", component: CartPageComponent }, // About route
  { path: "**", component: NotFoundPageComponent }, // Wildcard for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
