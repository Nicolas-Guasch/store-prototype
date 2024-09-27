import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {
  @Input({ required: true }) audioURL!: string;
  @ViewChild('wave') container!: ElementRef;
  private waveSurferInstance!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.waveSurferInstance = WaveSurfer.create({
      url: this.audioURL,
      container: this.container.nativeElement,
    });
    this.waveSurferInstance.on('play', () => this.isPlaying.set(true));
    this.waveSurferInstance.on('pause', () => this.isPlaying.set(false));
  }

  playPause() {
    this.waveSurferInstance.playPause();
  }
}
