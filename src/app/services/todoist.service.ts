import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoistService {

  API_KEY: string;

  TODOIST_URL: string;


  constructor(private http: HttpClient, private storage: Storage ) {
    this.TODOIST_URL = "https://beta.todoist.com/API/v8/";
   }

   setApiKey(apiKey: string) {
     this.API_KEY = apiKey;
   }

   isApiKeyGood() {
     this.http.get(this.TODOIST_URL+'projects', this.getToDoIstHeaders(this.API_KEY)).subscribe(data => console.log(data));
   }

   private getToDoIstHeaders(apiKey: string): any {
    return { headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + apiKey
    })}
   }
  }
