import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { CommonHandlerService } from "src/app/common-handler.service";

@Component({
  selector: "app-top-navigation-bar",
  templateUrl: "./top-navigation-bar.component.html",
  styleUrls: ["./top-navigation-bar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class TopNavigationBarComponent implements OnInit, OnDestroy {
  renderer = inject(Renderer2);
  router = inject(Router);
  commonHandlerService = inject(CommonHandlerService);

  navTopics: MenuItem[] = [
    { label: "Home", routerLink: "/home" },
    { label: "About", routerLink: "/about" },
    { label: "Menu", routerLink: "/menu" },
    { label: "Contact", routerLink: "/contact" },
  ];

  images = [
    { url: "assets/a2a_carousel1.png", alt: "Image 1" },
    { url: "assets/a2a_carousel2.png", alt: "Image 2" },
    { url: "assets/a2a_carousel1.png", alt: "Image 3" },
  ];

  currentIndex: number = 0;
  private intervalId: any;
  menuActive = false;

  ngOnInit() {
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 3 seconds
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  prevSlide(): void {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  getCartItemCount() {
    return this.commonHandlerService.getCartItemsCount()
      ? this.commonHandlerService.getCartItemsCount()
      : 0;
  }

  openCart() {
    this.router.navigate(["/cart"]);
    console.log("Open cart");
  }

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        this.renderer.addClass(navbar, "scrolled");
      } else {
        this.renderer.removeClass(navbar, "scrolled");
      }
    }
  }
}
