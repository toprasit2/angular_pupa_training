import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
})
export class MusicListComponent implements OnInit {
  musicList: Music[];
  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadMusicList();
  }

  loadMusicList() {
    this.musicList = this.musicService.listMusic();
  }

  deleteMusic(id) {
    this.musicService.deleteMusic(id);
    this.loadMusicList();
  }
}
