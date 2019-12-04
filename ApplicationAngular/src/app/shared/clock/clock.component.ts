import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  now = new Date();

  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.delay.firstChange && changes.delay.previousValue !== changes.delay.currentValue) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.now = new Date();
      }, this.delay);
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
