import { Component } from '@angular/core';
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

  messages: Message[];
  title: string;

  constructor() {
    this.title = 'catchat works!';
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
  }
}
