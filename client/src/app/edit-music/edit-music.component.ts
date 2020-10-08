import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css']
})
export class EditMusicComponent implements OnInit {

  constructor(
    private musicservice: MusicService,
  ) { }

  ngOnInit(): void {
  }

}
