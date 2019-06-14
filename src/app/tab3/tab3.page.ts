import { Component } from '@angular/core';
import { TodoistService } from '../services/todoist.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
  })
  export class Tab3Page {

    apiKey: string;

    items: string[];

    isApiKey: boolean;

    constructor(private toDoIstService: TodoistService){}

    ngOnInit(){
        this.items = ['a','b','c','d']
    }

    authenticateToToDoIst() {
      this.toDoIstService.setApiKey(this.apiKey);
      this.toDoIstService.isApiKeyGood();
    }

    isApiKeyGood() {
    }

  }