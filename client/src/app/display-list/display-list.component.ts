import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  musicList: Music[]
  constructor(private musicService: MusicService) {
    
  }

  ngOnInit(): void {
    this.musicList = this.musicService.listMusic();
  }
  
}
