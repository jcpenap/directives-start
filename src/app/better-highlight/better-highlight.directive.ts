import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
  }

}
