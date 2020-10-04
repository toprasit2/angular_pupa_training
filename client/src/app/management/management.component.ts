import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Music, MusicService } from '../music.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
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
  deLete(id) {
    this.musicService.deleteMusic(id);
    this.musicList = this.musicService.listMusic();
  }
  goToEditPage(id) {
    this.router.navigate([`/edit/${id}`]);
  }
}
