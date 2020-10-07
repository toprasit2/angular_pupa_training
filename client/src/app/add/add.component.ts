import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Music,MusicService } from '../music.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  music:Music
  musicgroup = new FormGroup({
    title: new FormControl(''),
    youtubeId: new FormControl(''),
    imageLink: new FormControl('')
  });
  constructor(
    private musicService: MusicService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  add(){
    if(this.musicService.createMusic(this.musicgroup.value))
      this.back();
  }
  
  back(): void {
    this.location.back();
  }

}
