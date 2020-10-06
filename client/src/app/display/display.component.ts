import { Component, OnInit } from '@angular/core';
import {  Music,MusicService } from '../music.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(
    private musicService: MusicService ,
    private location: Location
  ) { }
  musics: Music[];
  ngOnInit(): void {
    this.musics = this.musicService.listMusic();
  }
  back(): void{
    this.location.back();
  }

}
