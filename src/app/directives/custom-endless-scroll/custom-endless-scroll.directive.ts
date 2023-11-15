import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[customEndlessScroll]",
})
export class CustomEndlessScrollDirective {
  @Input() distance: number = 0.2;
  @Output() bottomScrollReached: EventEmitter<void> = new EventEmitter();
  canEmit: boolean = true;

  constructor() {}

  @HostListener("window:scroll") onScroll() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    const currentScroll = scrollTop + viewportHeight / 2;
    const umbral = documentHeight * (1 - this.distance);
    if (currentScroll > umbral) {
      if (this.canEmit) {
        this.bottomScrollReached.emit();
      }
      this.canEmit = false;
    } else {
      this.canEmit = true;
    }
  }
}
