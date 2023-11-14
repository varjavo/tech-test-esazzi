import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";

@Injectable()
export class ApiService {
  constructor() {}

  /**
   * Request a list of items from a service
   * It must make an http request to a back-end service, but to avoid that part, we simulate an item list creation
   * @param pageNumber for pagination
   * @param pageSize for pagination
   * @returns a list of items as observable
   */
  getItems(pageNumber: number, pageSize: number): Observable<any[]> {
    // ! we don't need pageNumber offset implementation since it's a mock method
    const itemsList = [];
    for (let index = 0; index < pageSize; index++) {
      itemsList.push({
        id: Math.random(),
        creation: new Date().toISOString(),
        // ! Add all the needed properties according to the view
      });
    }
    return of(itemsList);
  }
}