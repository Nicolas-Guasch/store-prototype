import {
  Component,
  Input,
  input,
  signal,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) counterStart: number = 0;
  counter = signal<number>(0);
  interval$: Subscription | null = null;

  ngOnInit() {
    this.counter.set(this.counterStart);
    this.interval$ = interval(10000).subscribe(() =>
      this.counter.update((prev) => prev + 1),
    );
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
