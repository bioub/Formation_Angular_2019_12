import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  now$: Observable<Date>;

  //private subscription: Subscription;

  ngOnInit() {
    // Ex : transformer setInterval en Observable
    // Utiliser la fonction :
    // interval(1000)
    // Pour créer un observable qui vous fournira dans le temps
    // 0----1----2----3----4----5----
    // Utiliser l'opérateur map pour transformer les valeurs
    // en Date
    // Utiliser l'opérateur take pour ne récupérer que 10 valeurs
    // Ajouter le code pour unsubscribe au ngOnDestroy

    // 0----1----2----3----4----5----
    // map(() => new Date())
    // d----d----d----d----d----d----
    // take(3)
    // d----d----d|
    this.now$ = interval(1000).pipe(
      map(() => new Date()),
      // take(10),
    );

    // Exercice : traduire users et users-details avec le pipe async

    // this.subscription = now$.subscribe((now) => {
    //   this.now = now;
    // })
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (!changes.delay.firstChange && changes.delay.previousValue !== changes.delay.currentValue) {
  //     clearInterval(this.intervalId);
  //     this.intervalId = setInterval(() => {
  //       this.now = new Date();
  //     }, this.delay);
  //   }
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
