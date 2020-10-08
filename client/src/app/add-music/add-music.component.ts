import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
 
  musicgroup = new FormGroup({
    title: new FormControl(''),
    youtubeId: new FormControl(''),
    imageLink: new FormControl(''),
  })
  constructor(
    private musicservice: MusicService,
    private location: Location,
    private router: Router,
  ) {}

  add(){
    this.musicservice.createMusic(this.musicgroup.value)
    this.router.navigate([`/management`]);
  } 

  ngOnInit(): void {
  }
  
}
