import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopNavigationBarComponent } from "./_shared/top-navigation-bar/top-navigation-bar.component";
import { FooterComponentComponent } from "./_shared/footer-component/footer-component.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MenuPageComponent } from "./pages/menu-page/menu-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuCardComponent } from "./_shared/menu-card/menu-card.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FooterComponentComponent,
    HomePageComponent,
    MenuPageComponent,
    MenuCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
