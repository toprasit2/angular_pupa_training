import { Component, OnInit } from '@angular/core';
import { MusicService, Music } from '../music.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  
  list: Music[]

  constructor( 
    private musiclist: MusicService,
    ) { }

  ngOnInit(): void{
    this.list = this.musiclist.listMusic()
   
  }
  delete(id){
    this.musiclist.deleteMusic(id);
    this.list = this.musiclist.listMusic();
  }

}
