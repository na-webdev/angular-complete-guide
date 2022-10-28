import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[ttClass]' })
export class TtClassDirective implements OnInit {
  @Input() ttClass: string;

  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.classList.add(this.ttClass);
  }
}
