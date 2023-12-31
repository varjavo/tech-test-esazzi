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
  canLoadMoreItems = true;

  constructor(private apiService: ApiService) {
    this.getItems();
  }

  /**
   * Triggered when 90& of the page was scrolled.
   * Request a new set of items from `ApiService`
   */
  onBottomScrollReached() {
    if (this.canLoadMoreItems) {
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
  }

  getCreatorRate(item: any): boolean[] {
    const rate = [];
    for (let i = 0; i < 5; i++) {
      rate[i] = Math.floor(item.creator.rate) > i;
    }
    return rate;
  }

  /**
   * Local method to request a new set of items from `ApiService`
   */
  private getItems(): void {
    this.apiService
      .getItems(this.currentPageNumber, this.currentPageSize)
      .subscribe((getItemsResponse: any[]) => {
        this.cardsList = [...this.cardsList, ...getItemsResponse];
        if (getItemsResponse.length === 0) {
          this.canLoadMoreItems = false;
        }
      });
  }
}
