import { Component, HostListener, inject, OnInit } from "@angular/core";
import { CommonHandlerService } from "./common-handler.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  commonHandlerService = inject(CommonHandlerService);

  ngOnInit(): void {}

  @HostListener("document:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent): boolean {
    const forbiddenKeys = ["F12", "I", "C", "J", "U", "∆", "DEAD", "Ç"];
    if (this.commonHandlerService.isInspectDisabled()) {
      if (
        (forbiddenKeys.includes(event.key.toUpperCase()) &&
          (event.ctrlKey || event.metaKey || event.altKey)) ||
        event.key.toUpperCase() == "F12"
      ) {
        event.preventDefault();
        return false;
      }
    }
    return true;
  }

  @HostListener("document:contextmenu", ["$event"])
  handleContextMenu(event: MouseEvent): boolean {
    if (this.commonHandlerService.isInspectDisabled()) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
