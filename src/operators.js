import {
  fromEvent,
  interval
} from 'rxjs';
import {
  filter,
  map,
  reduce,
  take,
  takeLast,
  takeWhile,
  tap,
  scan,
  switchMap,
  switchMapTo
} from "rxjs/operators";

fromEvent(document, 'click')
  .pipe(
    switchMap(() => {
      return interval(50)
        .pipe(
          // tap(value => console.log('Tap: ', value)),
          take(5),
          reduce((acc, value) => acc + value, 0)
        );
    })
  )
  .subscribe({
    next: value => console.log('Next: ', value),
    complete: () => console.log('Complete')
  });

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  switchMapTo(
    interval(500)
      .pipe(
        take(10)
      )
  )
);
result.subscribe(x => console.log(x));