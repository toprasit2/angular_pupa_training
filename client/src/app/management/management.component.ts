import { Component, OnInit } from '@angular/core';
import { Music, MusicService } from '../music.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  constructor(
    private musicService: MusicService ,
    private location:Location
  ) { }
  musics: Music[];
  
  ngOnInit(): void {
    this.musics = this.musicService.listMusic();
  }
  delete(id){
    this.musicService.deleteMusic(id);
    this.musics = this.musicService.listMusic();
  }
  back(): void{
    this.location.back();
  }

}
