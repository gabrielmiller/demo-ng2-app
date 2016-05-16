import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../shared/interfaces';


@Component({
  moduleId: module.id,
  selector: 'gravatar',
  templateUrl: 'gravatar.component.html',
  styleUrls: ['gravatar.component.css']
})
export class GravatarComponent implements OnInit {
  
  @Input('author') author: Author;
  
  src: string;

  constructor() {
  }

  ngOnInit() {
    this.src = this.author.first
  }
  
}
