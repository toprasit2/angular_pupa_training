import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
