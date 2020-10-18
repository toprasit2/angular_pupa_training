import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css'],
})
export class MusicCreateComponent implements OnInit {
  musicForm: FormGroup = new FormGroup({});

  constructor(private musicService: MusicService, private location: Location) {}

  ngOnInit(): void {}

  submit() {
    this.musicService.createMusic(this.musicForm.value).subscribe(_=>{});
    this.location.back();
  }
}
