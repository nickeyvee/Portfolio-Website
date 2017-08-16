
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'65%' }), { optional: true }),
      
    group([
      query(':enter', [
        style({ transform: 'translateX( 100% )' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX( 10% )' }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX( -10%)' }),
        animate('0.2s ease-in-out', style({ transform: 'translateX( -200% )' }))
      ], { optional: true }),
    ])
  ])
])