import { Component, signal } from '@angular/core';

import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  clients = signal(1000);

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.clients.set(input.valueAsNumber);
  }
}
