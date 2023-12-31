import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from "./app.component";
import { ApiService } from "./services/api/api.service";
import { CardImagePipe } from "./pipes/card-image/card-image.pipe";
import { CustomEndlessScrollDirective } from "./directives/custom-endless-scroll/custom-endless-scroll.directive";

@NgModule({
  declarations: [AppComponent, CardImagePipe, CustomEndlessScrollDirective],
  imports: [BrowserModule, InfiniteScrollModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
