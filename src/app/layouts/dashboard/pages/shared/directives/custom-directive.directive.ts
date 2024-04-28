import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.size = '500'
    // No logré que la directiva tomara el valor de fontSize
  }
}
