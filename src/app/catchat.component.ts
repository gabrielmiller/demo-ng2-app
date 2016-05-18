// Core
import { Component } from '@angular/core';

// AngularFire2
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// Internal
import { Author, Message } from './shared/interfaces';
import { AvatarComponent } from './shared/avatar';
import { Format } from './shared';

@Component({
  directives: [AvatarComponent],
  moduleId: module.id,
  pipes: [Format],
  selector: 'catchat-app',
  styleUrls: ['catchat.component.css'],
  templateUrl: 'catchat.component.html'
})
export class CatchatAppComponent {
  author: Author;
  messages: FirebaseListObservable<any[]>;
  model: string;

  constructor(public af: AngularFire) {
    this.af = af;
    this.author = {
       first: this.randomWord(5),
       last: this.randomWord(8)
    };
    this.messages = af.database.list('/messages', {query: {limitToLast: 20}});
    this.model = ""
  }
  
  randomWord(length: number) : string {
    let i = length;
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let word = "";
    while (--i) {
      let o = Math.random() * letters.length;
      word += letters.slice(o, o+1);
    }
    return word;
  }
  
  sendMessage(message: string) {
    let m = this.model;
    this.model = "";
    return this.af.database.list('/messages').push({ author : this.author, text: m });
  }
}
