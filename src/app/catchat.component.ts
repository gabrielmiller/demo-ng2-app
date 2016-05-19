// Core
import { Component } from '@angular/core';

// AngularFire2
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// Internal
import { Author, Message } from './shared/interfaces';
import { AvatarComponent } from './shared/avatar';
import { Format, CatService } from './shared';

@Component({
  directives: [AvatarComponent],
  moduleId: module.id,
  pipes: [Format],
  providers: [CatService],
  selector: 'catchat-app',
  styleUrls: ['catchat.component.css'],
  templateUrl: 'catchat.component.html'
})
export class CatchatAppComponent {
  author: Author;
  messages: FirebaseListObservable<any[]>;
  model: string;

  constructor(public af: AngularFire, public cs: CatService) {
    this.messages = af.database.list('/messages', {query: {limitToLast: 4}});
    this.model = "";
    
    let id = Math.ceil(Math.random() * 8);
    
    this.author = {
       id: id,
       name: this.cs.getName(id)
    };
  }
  
  sendMessage(message: string) {
    let m = this.model;
    this.model = "";
    return this.af.database.list('/messages').push({ author : this.author, text: m });
  }
}