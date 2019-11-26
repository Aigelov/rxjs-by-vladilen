import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
} from 'rxjs';

/** SUBJECT */
// document.addEventListener('click', () => {
//   const stream$ = new Subject();
//   stream$.subscribe(value => {
//     console.log(value);
//   });
//   stream$.next('Hello');
//   stream$.next('Rx');
//   stream$.next('JS');
// });


/** BEHAVIOR_SUBJECT */
// document.addEventListener('click', () => {
//   const stream$ = new BehaviorSubject('Hello');
//   stream$.subscribe(value => {
//     console.log(value);
//   });
//   stream$.next('World');
//   stream$.next('Rx');
//   stream$.next('JS');
// });


/** REPLAY_SUBJECT */
document.addEventListener('click', () => {
  const stream$ = new ReplaySubject(2);
  stream$.next('Hello');
  stream$.next('World');
  stream$.next('Rx');
  stream$.next('JS');
  stream$.subscribe(value => {
    console.log(value);
  });
});