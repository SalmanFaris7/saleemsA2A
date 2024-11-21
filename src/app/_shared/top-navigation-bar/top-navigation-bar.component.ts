import {
  Component,
  HostListener,
  inject,
  Renderer2,
  ViewEncapsulation,
} from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-top-navigation-bar",
  templateUrl: "./top-navigation-bar.component.html",
  styleUrls: ["./top-navigation-bar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavigationBarComponent {
  renderer = inject(Renderer2);

  navTopics: MenuItem[] = [
    { label: "Home", routerLink: "home" },
    { label: "About", routerLink: "about" },
    { label: "Menu", routerLink: "menu" },
    { label: "Contact", routerLink: "contact" },
  ];

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      this.renderer.addClass(navbar, "scrolled");
    } else {
      this.renderer.removeClass(navbar, "scrolled");
    }
  }
}
