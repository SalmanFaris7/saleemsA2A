import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-menu-card",
  templateUrl: "./menu-card.component.html",
  styleUrls: ["./menu-card.component.scss"],
})
export class MenuCardComponent implements OnInit {
  @ViewChild("RemoveFromCart") RemoveFromCart: any;
  itemCount = 1;
  isAddeddToCart = false;
  dialogRef: any;

  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}

  increaseItem() {
    this.itemCount++;
    console.log("Increment : ", this.itemCount);
  }

  decreaseItem() {
    if (this.itemCount > 1) {
      this.itemCount--;
      console.log("Decrement : ", this.itemCount);
    } else if (this.itemCount == 1) {
      this.dialogRef = this.dialog.open(this.RemoveFromCart);
    }
  }

  addToCart() {
    this.isAddeddToCart = !this.isAddeddToCart;
    this.itemCount = 1;
    console.log("Added to cart : ", this.isAddeddToCart);
  }

  cancelCartRemoval() {
    this.dialogRef.close();
  }

  removeFromCart() {
    this.dialogRef.close();
    this.isAddeddToCart = !this.isAddeddToCart;
    this.itemCount = 0;
  }
}
