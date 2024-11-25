import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonHandlerService {
  constructor() {}

  isInspectDisabled() {
    // return true;
    return false;
  }

  addToCart(item: any) {
    let cartItems = [];
    let localCart = localStorage.getItem("localCart");

    if (!localCart) {
      localStorage.setItem("localCart", JSON.stringify([item]));
    } else {
      cartItems = JSON.parse(localCart);
      cartItems.push(item);
      localStorage.setItem("localCart", JSON.stringify(cartItems));

      console.log("Item addedd to cart");
    }
  }

  getCartItemsCount() {
    let cartItems = [];
    let localCart = localStorage.getItem("localCart");

    if (localCart) {
      cartItems = JSON.parse(localCart);
      return cartItems.length;
    }
    return 0;
  }
}
