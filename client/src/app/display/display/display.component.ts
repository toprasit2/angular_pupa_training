import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  musiclist: Music[];
  constructor(private musicservice: MusicService) { }

  ngOnInit(): void {
    this.musiclist = this.musicservice.listMusic();
  }

}
