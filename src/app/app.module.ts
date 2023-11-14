import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from "./app.component";
import { ApiService } from "./services/api/api.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfiniteScrollModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
