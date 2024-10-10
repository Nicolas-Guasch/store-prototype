import { Component, signal } from '@angular/core';

import { CounterComponent } from '@shared/components/counter/counter.component';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export default class AboutComponent {
  clients = signal(1000);

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.clients.set(input.valueAsNumber);
  }
}
