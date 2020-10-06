import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from './music.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private location: Location, private _router: Router) {}

  back() {
    this.location.back();
  }

  isRouteHome() {
    return this._router.url === '/';
  }
}
