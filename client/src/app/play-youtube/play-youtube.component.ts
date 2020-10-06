import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../music.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
@Component({
  selector: 'app-play-youtube',
  templateUrl: './play-youtube.component.html',
  styleUrls: ['./play-youtube.component.css']
})
export class PlayYoutubeComponent implements OnInit {
  music: Music
  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private domSanitizer: DomSanitizer,
    private location: Location
  ) { }
  a(music){
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+music.youtubeId);
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.music = this.musicService.loadMusic(id);
  }
  back(): void{
    this.location.back();
  }
}
