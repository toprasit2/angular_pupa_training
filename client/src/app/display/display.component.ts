import { Component, OnInit } from '@angular/core';
import {  Music,MusicService } from '../music.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  constructor(
    private musicService: MusicService 
  ) { }
  musics: Music[];
  ngOnInit(): void {
    this.musics = this.musicService.listMusic();
  }

}
