import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CommonHandlerService } from "src/app/common-handler.service";

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

  commonHandlerService = inject(CommonHandlerService);
  dialog = inject(MatDialog);

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
      this.dialogRef = this.dialog.open(this.RemoveFromCart, {
        hasBackdrop: true,
        width: "300px",
        height: "200px",
        position: { top: "50%" },
      });
    }
  }

  addToCart() {
    this.isAddeddToCart = !this.isAddeddToCart;
    this.itemCount = 1;
    this.commonHandlerService.addToCart({
      itemId: "1",
      itemName: "Pudding",
      itemCount: this.itemCount,
      itemPrice: 10.0,
    });
    console.log("Added to cart : ", this.isAddeddToCart);
  }

  onCartItemCountChange($event: any) {
    if ($event.target.value > 1) {
      this.itemCount = $event.target.value;
      this.commonHandlerService.addToCart({
        itemId: "1",
        itemName: "Pudding",
        itemCount: $event.target.value,
        itemPrice: 10.0,
      });
    }
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
