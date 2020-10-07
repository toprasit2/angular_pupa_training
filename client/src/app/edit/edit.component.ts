import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../music.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  music = new FormGroup({
    title: new FormControl(''),
    youtubeId: new FormControl(''),
    imageLink: new FormControl(''),
  }); 
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
    const music = this.musicService.loadMusic(id)
    if(music){
      this.music.patchValue(music);
    }
    else
      this.goback();      
  }

  goback() {
    this.location.back();
  }
  upDateMusicAndBack() {
    const id = this.route.snapshot.paramMap.get('id');
    this.music.patchValue(this.musicService.updateMusic(id, this.music.value));
    this.location.back();
  }
}
