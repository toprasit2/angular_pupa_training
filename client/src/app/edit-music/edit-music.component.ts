import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from '../music.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-music',
  templateUrl: './edit-music.component.html',
  styleUrls: ['./edit-music.component.css']
})
export class EditMusicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private location: Location,
  ) { }
  music: Music
  musicgroup = new FormGroup({
    title: new FormControl(''),
    youtubeId: new FormControl(''),
    imageLink: new FormControl('')
  });

  ngOnInit(): void {
    this.loadmusic();
  }
  loadmusic() {
    const id = this.route.snapshot.paramMap.get('id');
    this.music = this.musicService.loadMusic(id);
    if (!this.music) this.back()
    console.log(this.music.id)
    this.musicgroup.patchValue(this.music);
  }
  updatemusic() {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.musicService.updateMusic(id, this.musicgroup.value))
      this.back()
  }

  back(): void {
    this.location.back();
  }
}