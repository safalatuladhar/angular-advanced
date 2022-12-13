import { Component, OnInit, OnDestroy } from '@angular/core';
import { pipe, filter, map, Observable, Subscription, Subject, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-adv';

  observable: Observable<number>;

  // subscriber: Subscription;
  subscription: Subscription;

  secondSub: Subscription;

  // ngOnInit(): void {
  //   // initializing an observable
  //   this.observable = new Observable((subscriber) => {
  //     // emitting next value
  //     subscriber.next(101);
  //     // emitting value 5 after 5 seconds
  //     setTimeout(() => subscriber.next(5), 5000);
  //     subscriber.next(1);

  //     setTimeout(() => {
  //       // after 7 seconds emitting value 66
  //       subscriber.next(66);
  //       // after 7 seconds completing the observable meaning observable is done emitting the value
  //       subscriber.complete();
  //     }, 7000);

  //     setTimeout(() => {
  //       // after 6 seconds sending error
  //       // meaning the observable never gets to complete
  //       subscriber.error('an error occurred!!');
  //     }, 6000);
  //   });

  //   this.subscription = this.observable.subscribe({
  //     next(val) {
  //       console.log(`next val is ${val}`);
  //     },
  //     error(err) {
  //       console.log(`something went wrong: ${err}`);
  //     },
  //     complete() {
  //       console.log('completed');
  //     },
  //   });
  // }

  // ngOnInit(): void {
  //   this.observable = new Observable((subscriber) => {
  //     // emitting next value
  //     subscriber.next(101);
  //     // emitting value 5 after 5 seconds
  //     setTimeout(() => subscriber.next(5), 5000);
  //     subscriber.next(1);
  //     setTimeout(() => subscriber.next(2), 1000);
  //     setTimeout(() => subscriber.next(3), 2000);

  //     setTimeout(() => {
  //       // after 7 seconds emitting value 66
  //       subscriber.next(66);
  //       // after 7 seconds completing the observable meaning observable is done emitting the value
  //       subscriber.complete();
  //     }, 7000);

  //     setTimeout(() => {
  //       // after 6 seconds sending error
  //       // meaning the observable never gets to complete
  //       subscriber.error('an error occurred!!');
  //     }, 6000);
  //   });

  //   this.subscription = this.observable
  //     .pipe(
  //       map((v) => v * 2),
  //       filter((v) => v < 100)
  //     )
  //     .subscribe({
  //       next(val) {
  //         console.log(`next val is ${val}`);
  //       },
  //       error(err) {
  //         console.log(`something went wrong: ${err}`);
  //       },
  //       complete() {
  //         console.log('completed');
  //       },
  //     });

  //   setTimeout(() => {
  //     this.secondSub = this.observable.pipe().subscribe({
  //       next(val) {
  //         console.log(`from second sub next val is ${val}`);
  //       },
  //       error(err) {
  //         console.log(`from second sub something went wrong: ${err}`);
  //       },
  //       complete() {
  //         console.log('from second sub completed');
  //       },
  //     });
  //   }, 2000);
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  //    this.secondSub.unsubscribe();
  // }

  ngOnInit(): void{
      const subject = new Subject<number>();

      subject.subscribe({
        next: (v) => console.log(`observerA: ${v}`),
      });
      subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`),
      });

      const observable = from([1, 2, 3]);

      observable.subscribe(subject);

      subject.next(1);
      subject.next(2);

  }

}
