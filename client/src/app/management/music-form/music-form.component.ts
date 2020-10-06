import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Music } from 'src/app/music.service';

@Component({
  selector: 'app-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.css'],
})
export class MusicFormComponent implements OnInit {
  @Input() musicForm: FormGroup;
  @Input() set musicData(data) {
    if (data) {
      this.initFormControl(data);
      this.music = data;
    }
  }
  music: Music;

  constructor() {}

  ngOnInit(): void {
    if (!this.music) {
      this.initFormControl();
    }
  }

  initFormControl(data?) {
    this.musicForm.setControl('id', new FormControl(data?.id));
    this.musicForm.setControl('title', new FormControl(data?.title));
    this.musicForm.setControl('youtubeId', new FormControl(data?.youtubeId));
    this.musicForm.setControl('imageLink', new FormControl(data?.imageLink));
    this.musicForm.updateValueAndValidity();
  }
}
