
import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'65%' }), { optional: true }),
      
    group([
      query(':enter', [
        style({ transform: 'translateX( 175% )' }),
        animate('0.4s ease-in-out', style({ transform: 'translateX( 25% )' }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX( 25%)' }),
        animate('0.4s ease-in-out', style({ transform: 'translateX( -175% )' }))
      ], { optional: true }),
    ])
  ])
]);