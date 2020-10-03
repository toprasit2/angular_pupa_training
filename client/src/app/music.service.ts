import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

interface Music {
  id?: number;
  title: string;
  youtubeId: string;
  imageLink: string;
}

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  MUSIC_LIST: Music[] = [
    {
      id: uuidv4(),
      title: 'Believer - Imagine Dragons - Fingerstyle Guitar Cover',
      youtubeId: 'hXQxSi34GWY',
      imageLink:
        'https://img.freepik.com/free-photo/guitarist-stage-sings-concert_34200-319.jpg?size=626&ext=jpg',
    },
    {
      id: uuidv4(),
      title: 'Believer - Imagine Dragons - Fingerstyle Guitar Cover',
      youtubeId: 'hXQxSi34GWY',
      imageLink:
        'https://img.freepik.com/free-photo/guitarist-stage-sings-concert_34200-319.jpg?size=626&ext=jpg',
    },
    {
      id: uuidv4(),
      title: 'Believer - Imagine Dragons - Fingerstyle Guitar Cover',
      youtubeId: 'hXQxSi34GWY',
      imageLink:
        'https://img.freepik.com/free-photo/guitarist-stage-sings-concert_34200-319.jpg?size=626&ext=jpg',
    },
  ];

  constructor() {}

  listMusic(): Music[] {
    return this.MUSIC_LIST;
  }

  loadMusic(id): Music {
    return _.find(this.MUSIC_LIST, (music) => {
      return music.id === id;
    });
  }

  getGenerateId(): string {
    return uuidv4();
  }

  createMusic(data: Music): Music {
    const result = {
      id: uuidv4(),
      ...data,
    };
    this.MUSIC_LIST.push(result);

    return result;
  }

  deleteMusic(id): boolean {
    const results = _.filter(this.MUSIC_LIST, (music) => {
      return music.id !== id;
    });
    this.MUSIC_LIST = results;
    return true;
  }
}
