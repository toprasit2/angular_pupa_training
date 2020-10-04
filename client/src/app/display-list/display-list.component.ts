import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  musicList: Music[]
  constructor(
      private musicService: MusicService,
      private router: Router,
      private location: Location,
     ) {

  }

  ngOnInit(): void {
    this.musicList = this.musicService.listMusic();
  }

  goToYoutubePage(id) {
    this.router.navigate([`/youtube/${id}`]);
  }
  goback() {
    this.location.back();
  }
}
