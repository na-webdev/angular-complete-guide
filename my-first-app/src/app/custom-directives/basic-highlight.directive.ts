import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'orange';
    this.elementRef.nativeElement.style.borderRadius = '10px';
  }
}
