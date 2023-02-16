import { Directive, OnChanges, Input, HostBinding, ElementRef } from '@angular/core';

    @Directive({
      selector: '[smoothHeight]',
      host: {  '[style.overflow]': '"hidden"'}
    })
    export class SmoothHeightAnimDirective implements OnChanges {
      @Input()
      smoothHeight:any;
      pulse: boolean=false;
      startHeight: number=0;

      constructor(private element: ElementRef) {}

      @HostBinding('@grow')
      get grow() {
        return { value: this.pulse, params: { startHeight: this.startHeight } };
      }

      setStartHeight() {
        this.startHeight = this.element.nativeElement.clientHeight;
      }

      ngOnChanges(changes:any) {
        this.setStartHeight();
        this.pulse = !this.pulse;
      }
    }