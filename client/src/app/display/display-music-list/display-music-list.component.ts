import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../../music.service';

@Component({
  selector: 'app-display-music-list',
  templateUrl: './display-music-list.component.html',
  styleUrls: ['./display-music-list.component.css'],
})
export class DisplayMusicListComponent implements OnInit {
  musicList: Music[];
  constructor(private musicService: MusicService, private location: Location) {}

  ngOnInit(): void {
    this.musicList = this.musicService.listMusic();
  }

  back() {
    this.location.back();
  }
}
