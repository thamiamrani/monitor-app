import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoDAOService } from './photo-dao.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(private camera: Camera, public photoDAOService: PhotoDAOService ) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.photos.unshift({data: 'data:image/jpeg;base64,' + imageData});

      this.photoDAOService.add(this.photos);
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }

  loadSaved() {
    this.photoDAOService.get().then((photos) => {
      this.photos = photos || [];
    });
  }

  clear() {
    this.photoDAOService.clear();
    }

}

class Photo {
  data: any;
}