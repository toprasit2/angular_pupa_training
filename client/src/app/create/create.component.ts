import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  music = new FormGroup({
    title: new FormControl(''),
    youtubeId: new FormControl(''),
    imageLink: new FormControl(''),
  }); 
  constructor(
    private musicService: MusicService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  goback() {
    this.location.back();
  }

  createMusic() {
    this.musicService.createMusic(this.music.value);
    this.goback();
  }
}
