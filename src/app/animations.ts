import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

const slideDownIn = [
  style({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'translateY(-100%)',
    opacity: 0,
  }),
  animate('1s ease-in', style({ transform: 'translateY(0%)', opacity: 1 })),
];

const slideDownOut = [
  style({ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }),
  animate('1s ease-out', style({ transform: 'translateY(100%)', opacity: 0 })),
];

export const routeAnimations: AnimationTriggerMetadata = trigger(
  'routeAnimations',
  [transition(':enter', slideDownIn), transition(':leave', slideDownOut)]
);
