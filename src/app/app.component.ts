import { Component } from "@angular/core";
import { ApiService } from "./services/api/api.service";
import { environment } from "../environments/environment";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  cardsList: any[] = [];
  currentPageNumber = 0;
  currentPageSize = 10;

  constructor(private apiService: ApiService) {
    this.getItems();
  }

  /**
   * Triggered when 90& of the page was scrolled.
   * Request a new set of items from `ApiService`
   */
  onBottomScrollReached() {
    this.currentPageNumber++;
    this.getItems();
    if (!environment.production) {
      console.log(
        `Triggered at ${(
          (100 * window.scrollY) /
          document.body.clientHeight
        ).toFixed(1)}%`
      );
    }
  }

  /**
   * Local method to request a new set of items from `ApiService`
   */
  private getItems(): void {
    this.apiService
      .getItems(this.currentPageNumber, this.currentPageSize)
      .subscribe((getItemsResponse: any[]) => {
        this.cardsList = [...this.cardsList, ...getItemsResponse];
      });
  }
}
