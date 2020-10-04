import { Component, OnInit } from '@angular/core';
import { MusicService, Music } from '../music.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-showdisplay',
  templateUrl: './showdisplay.component.html',
  styleUrls: ['./showdisplay.component.css']
})
export class ShowdisplayComponent implements OnInit {
  show_musicID: Music
  constructor(
    private location : Location,
    private musicService: MusicService,
    private route: ActivatedRoute,
    private dom:DomSanitizer,
  ) { }

  transfrom(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.loadmusic()
  }
  loadmusic() {
    const id = this.route.snapshot.paramMap.get('id');
    this.show_musicID = this.musicService.loadMusic(id)
    if(this.show_musicID)
      return this.transfrom(`https://www.youtube.com/embed/${this.show_musicID?.youtubeId}?autoplay=1&mute=1`)
    else
      return this.location.back();
  }
}