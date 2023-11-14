import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cardsList: any[] = [];

  constructor() {
    for (let index = 0; index < 10; index++) {
      // ! Fill this random list in order to test endless scroll package
      this.cardsList.push({
        id: Math.random(),
        creation: new Date().toISOString(),
      });
    }
  }

  onBottomScrollReached() {
    for (let index = 0; index < 10; index++) {
      // ! Fill this random list in order to test endless scroll package
      this.cardsList.push({
        id: Math.random(),
        creation: new Date().toISOString(),
      });
    }
    console.log(
      `Triggered at ${(
        (100 * window.scrollY) /
        document.body.clientHeight
      ).toFixed(1)}%`
    );
  }
}
