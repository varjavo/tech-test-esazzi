import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardImage",
})
export class CardImagePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value || "/assets/images/card-placeholder-image.png";
  }
}
