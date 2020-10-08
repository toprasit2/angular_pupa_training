import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  Musiclist : Music[]
  constructor( private musicservice: MusicService) { }

  ngOnInit(): void{
    this.Musiclist = this.musicservice.listMusic()
  }

}
