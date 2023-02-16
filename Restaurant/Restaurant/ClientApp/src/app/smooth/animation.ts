import {
    animate,
    style,
    transition,
    trigger,
    state,
  } from '@angular/animations';

  export const smoothHeight = trigger('grow', [
    transition('void <=> *', []),
    transition('* <=> *', [style({ height: '{{startHeight}}px' }), animate('.5s ease')], {
      params: { startHeight: 0 }
    })
  ]);