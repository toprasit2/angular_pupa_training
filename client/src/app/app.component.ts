import { Component } from '@angular/core';
import { MusicService } from './music.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private musicService: MusicService) {
    console.log(this.musicService.listMusic());
    const music = this.musicService.loadMusic(
      this.musicService.listMusic()[0].id
    );
    console.log(music);
    this.musicService.deleteMusic(music.id);
    console.log(this.musicService.listMusic());
  }
}
