import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
} from 'rxjs';

const btnSubject1 = document.getElementById('subject1');
const btnSubject2 = document.getElementById('subject2');
const btnSubject3 = document.getElementById('subject3');
const btnSubject4 = document.getElementById('subject4');

/** SUBJECT */
const stream$ = new Subject();
stream$.subscribe(value => {
  console.log(value);
});


/** BEHAVIOR_SUBJECT */
// const stream$ = new BehaviorSubject('Hello');
// stream$.subscribe(value => {
//   console.log(value);
// });


/** REPLAY_SUBJECT */
// const stream$ = new ReplaySubject(2);
// stream$.subscribe(value => {
//   console.log(value);
// });

btnSubject1.addEventListener('click', () => stream$.next('Hi'));
btnSubject2.addEventListener('click', () => stream$.next('Rx'));
btnSubject3.addEventListener('click', () => stream$.next('JS'));
btnSubject4.addEventListener('click', () => stream$.next('Buddy'));