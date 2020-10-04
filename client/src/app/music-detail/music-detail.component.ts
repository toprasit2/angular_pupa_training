import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  music: Music
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private musicService: MusicService,
    private sanitizer: DomSanitizer,
  ) { 
     
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
 

  ngOnInit(): void {
    this.loadmusic()
  }

  loadmusic() {
    const id = this.route.snapshot.paramMap.get('id');
    this.music = this.musicService.loadMusic(id)
    if(this.music)
      return this.transform(`https://www.youtube.com/embed/${this.music.youtubeId}`);
    else 
      return this.goback();
  }

  goback(){
    this.location.back();
  }
}
