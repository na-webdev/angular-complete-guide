import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {
    type: string
    name: string
    content: string
  }
  @Input() name: string
  @ViewChild('heading', { static: true }) heading: ElementRef
  @ContentChild('paragraphContent', { static: true })
  paragraphContent: ElementRef

  constructor() {
    console.log('constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('Text content: ' + this.heading.nativeElement.textContent)
    console.log(
      'Paragraph content: ' + this.paragraphContent.nativeElement.textContent
    )
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    console.log(
      'Paragraph content: ' + this.paragraphContent.nativeElement.textContent
    )
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    console.log('Text content: ' + this.heading.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
}
