import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cardsList: any[] = [];

  constructor() {
    for (let index = 0; index < 200; index++) {
      // ! Fill this random list in order to test endless scroll package
      this.cardsList.push({
        id: crypto.randomUUID(),
        creation: new Date().toISOString(),
      });
    }
  }
}
