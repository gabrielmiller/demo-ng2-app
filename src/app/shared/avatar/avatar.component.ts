import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../shared/interfaces';


@Component({
  moduleId: module.id,
  selector: 'avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.css']
})
export class AvatarComponent implements OnInit {
  
  @Input('author') author: Author;
  
  src: string;

  constructor() {
    // Hash the src object for use with gravatar or a similar API
  }

  ngOnInit() {
    this.src = this.author.first
  }
  
}
