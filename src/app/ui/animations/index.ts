import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

export function fade() {
  return trigger('fade', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(30, [
          animate('0.2s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(30, [
          animate('0.1s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ]);
}
