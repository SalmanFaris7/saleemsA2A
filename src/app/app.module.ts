import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './_shared/top-navigation-bar/top-navigation-bar.component';
import { FooterComponentComponent } from './_shared/footer-component/footer-component.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    FooterComponentComponent,
    HomePageComponent,
    MenuPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
