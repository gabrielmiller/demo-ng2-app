import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Author, Message } from './shared/interfaces';
import { GravatarComponent } from './shared/gravatar';
import { Format } from './shared';

@Component({

  directives: [GravatarComponent],
  moduleId: module.id,
  pipes: [Format],
  selector: 'catchat-app',
  styleUrls: ['catchat.component.css'],
  templateUrl: 'catchat.component.html'
})
export class CatchatAppComponent {

  //messages: Message[];
  messages: FirebaseListObservable<any[]>;
  model: string;
  title: string;

  constructor(af: AngularFire) {
    this.title = 'catchat works!';
    this.messages = af.database.list('/messages', {query: {limitToLast: 20}});
    this.model = ""
    /*
    this.messages = [
      {
        author: {
          first: 'System',
          last: ''
        },
        text: 'Welcome to cat chat!'
      },
      {
        author: {
          first: 'System',
          last: 'Test'
        },
        text: 'How are you doing today?!'
      }
    ];
    */
  }
  
  sendMessage(message: string) {
      console.log("Sending message", message);
      this.model = "";
  }
}
