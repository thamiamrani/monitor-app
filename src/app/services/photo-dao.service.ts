import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const PHOTOS_KEY = "photos"

@Injectable({
  providedIn: 'root'
})

export class PhotoDAOService {

  constructor(private storage: Storage) {
  }

  add(photos: any[]){
    this.storage.set(PHOTOS_KEY, photos);
  }

  get() {
    return this.storage.get(PHOTOS_KEY);
  }

  clear() {
    this.storage.clear();
  }
}
