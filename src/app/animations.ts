import {
    trigger,
    animate,
    transition,
    style,
    query,
    group
  } from '@angular/animations';

const resetRoute = [
    style({ position: 'relative' }),
    query(
        ':enter, :leave',
      [
          style({
                position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
                // tslint:disable-next-line: max-line-length
                left: 0,
                width: '100%',
                opacity: 0,
            }),
      ],
      { optional: true }
    ),
  ];

export const fadeInAnimation =
  // Fade Animation
  trigger('routeAnimation', [
    transition('* => *', [
        ...resetRoute,
        query(':enter', [style({ opacity: 0 })], {
          optional: true,
        }),
        group([
            query(
                ':leave',
                [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
                { optional: true }
            ),
            query(
                ':enter',
                [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
                { optional: true }
            ),
        ]),
    ]),
  ]);
  