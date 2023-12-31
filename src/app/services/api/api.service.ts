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
    const itemsList = [];
    if (pageNumber < 3) {
      for (let index = 0; index < pageSize; index++) {
        itemsList.push({
          id: Math.random(),
          creation: new Date().toISOString(),
          // ! Add all the needed properties according to the view
          image:
            Math.random() >= 0.5
              ? `https://dummyimage.com/600x400/000/808.jpg&text=Hello+world`
              : null,
          summary: "Idea summary from service",
          creator: {
            anonymous: true,
            user: null,
            rate: Math.random() * 4 + 1,
            opinions: Math.floor(Math.random() * 7) || null,
          },
          createdAt: new Date().toISOString(),
          assignees: [],
          workflow: {
            id: 3,
            name: "Idea review/PLM II",
          },
          score: null,
        });
      }
      return of(itemsList);
    } else {
      return of([]);
    }
  }
}
