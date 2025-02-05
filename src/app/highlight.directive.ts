import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  @Input() appHighlight = '';
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @Input() defaultColor = '';

}
