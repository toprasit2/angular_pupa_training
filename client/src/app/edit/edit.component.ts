import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  music: Music
  constructor(
    private musicService: MusicService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadmusic()
  }
  loadmusic() {
    const id = this.route.snapshot.paramMap.get('id');
    this.music = this.musicService.loadMusic(id)
    if(!this.music)
      this.goback();      
  }

  goback() {
    this.location.back();
  }
  upDateMusicAndBack(id,music) {
    this.music = this.musicService.updateMusic(id, music);
    this.location.back();
  }
}
