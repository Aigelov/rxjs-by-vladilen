import {
  from,
  fromEvent,
  interval,
  Observable,
  of,
  range,
  timer
} from 'rxjs';
import {
  map,
  scan,
  take
} from "rxjs/operators";

/** OF */
const streamOf$ = of(1, 2, 3, 4);
streamOf$.subscribe(value => {
  // console.log(`VALUE: ${value}`);
});


/** FROM */
// const arrFrom$ = from([1, 2, 3, 4]).pipe(
//   scan((acc, value) => acc.concat(value), [])
// );
// arrFrom$.subscribe(value => {
//   console.log(value)
// });


/** OBSERVABLE */
// const streamObservable$ = new Observable(observer => {
//   observer.next('FIRST VALUE');
//   setTimeout(() => observer.next('After 1000 ms'), 1000);
//   setTimeout(() => observer.next('After 2000 ms'), 2000);
//   setTimeout(() => observer.complete(), 3000);
//   setTimeout(() => observer.error('Something went wrong'), 4000);
// });
// streamObservable$.subscribe(
//   (result) => console.log(result),
//   (error) => console.log(error),
//   () => console.log('Complete')
// );
// streamObservable$.subscribe({
//   next(result) {
//     console.log(result)
//   },
//   error(error) {
//     console.log(error)
//   },
//   complete() {
//     console.log('Complete')
//   }
// });


/** FROM_EVENT */
// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(event => ({
//       x: event.offsetX,
//       y: event.offsetY,
//       ctx: event.target.getContext('2d')
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 3, 3);
//   });
// const clear$ = fromEvent(document.getElementById('clear'), 'click');
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });


/** INTERVAL */
// const interval$ = interval(500)
//   .subscribe(value => {
//     console.log(value);
//   });
// setTimeout(() => {
//   interval$.unsubscribe();
// }, 3000);


/** TIMER */
// timer(1500)
//   .subscribe(result => {
//     console.log(result);
//   });


/** RANGE */
// range(42, 10)
//   .subscribe(result => {
//     console.log(result);
//   });