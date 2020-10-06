import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../music.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private musicService:MusicService,
    private location: Location
  ) { }
  music:Music
 musicgroup = new FormGroup({
    title: new FormControl(''),
    youtubeId:  new FormControl(''),
    imageLink:  new FormControl('')
  });   
  
  ngOnInit(): void { 
    this.loadmusic();
  }
  loadmusic(){
    const id = this.route.snapshot.paramMap.get('id');
    this.music = this.musicService.loadMusic(id);
  }
  updatemusic(data) {
    this.musicgroup.patchValue({
      title : data.title,
      youtubeId : data.youtubeId,
      imageLink : data.imageLink
    });

  }
  back(): void{
    this.location.back();
  }

}
