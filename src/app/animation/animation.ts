import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = trigger('fade', [
  //state('void', style({ opacity: 0, transform: 'translateX(20px)' })),
  //transition(':enter,:leave', [
  //  animate(2000)
  //])

  //state('void', style({ opacity: 0, transform: 'scale(1.05)' })),

  //state('*', style({ transform: 'translateY(20px)', backgroundColor: 'Red' })),

  transition('void=>*', [
    style({ opacity: 0, transform: 'scale(1.05)' }),
    animate(1000)
  ]),

  transition('*=>void', [
    style({ transform: 'translateY(20px)', backgroundColor:'Red'}),
    animate(1000)
  ])

])
