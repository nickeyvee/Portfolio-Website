import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

export const footerTransition = trigger('footerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'65%' }), { optional: true }),
      
    group([
      query(':enter', [
        style({ transform: 'translateX( 175% )' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX( 10% )' }))
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX( -10%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX( -175% )' }))
      ], { optional: true }),
    ])
  ])
])