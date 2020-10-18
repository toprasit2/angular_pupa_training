import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Music, MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.css'],
})
export class MusicEditComponent implements OnInit {
  musicForm: FormGroup = new FormGroup({});
  music: Music;
  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.musicService.loadMusic(id).subscribe((data) => {
      this.music = data;
    });
  }

  submit() {
    this.musicService.editMusic(this.musicForm.value).subscribe((_) => {
      this.location.back();
    });
  }
}
