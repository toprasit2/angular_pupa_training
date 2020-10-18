import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Music {
  id?: number;
  title: string;
  youtubeId: string;
  imageLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  listMusic(): Observable<any> {
    return this.http.get('http://localhost:3000/music');
  }

  loadMusic(id): Observable<any> {
    return this.http.get(`http://localhost:3000/music/${id}`);
  }

  createMusic(data: Music): Observable<any> {
    return this.http.post('http://localhost:3000/music/create', data);
  }

  deleteMusic(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/music/delete/${id}`);
  }

  editMusic(data): Observable<any> {
    return this.http.put('http://localhost:3000/music/edit', data);
  }
}
