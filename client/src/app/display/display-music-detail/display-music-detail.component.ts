import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-display-music-detail',
  templateUrl: './display-music-detail.component.html',
  styleUrls: ['./display-music-detail.component.css'],
})
export class DisplayMusicDetailComponent implements OnInit {
  music: Music;
  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.music = this.musicService.loadMusic(id);
  }

  back() {
    this.location.back();
  }
}
