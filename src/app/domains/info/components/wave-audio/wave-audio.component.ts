import {
  Component,
  computed,
  effect,
  ElementRef,
  input,
  signal,
  Signal,
  viewChild,
} from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  audioURL = input.required<string>();
  container = viewChild.required<ElementRef>('wave');
  isPlaying = signal(false);
  private waveSurferInstance: Signal<WaveSurfer> = computed(() => {
    const ws = WaveSurfer.create({
      container: this.container().nativeElement,
    });
    ws.on('play', () => this.isPlaying.set(true));
    ws.on('pause', () => this.isPlaying.set(false));
    return ws;
  });

  constructor() {
    effect(() => {
      this.waveSurferInstance().load(this.audioURL());
    });
  }

  playPause() {
    this.waveSurferInstance().playPause();
  }
}
