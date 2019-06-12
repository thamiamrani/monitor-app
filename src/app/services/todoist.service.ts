import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class TodoistService {

  constructor(private http: HttpClient, private storage: Storage ) {

   }
}
