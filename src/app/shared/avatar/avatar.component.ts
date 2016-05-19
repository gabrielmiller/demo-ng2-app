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
    this.src = "#";
  }
  
  ngOnInit() {
    this.src = "cat" + String(this.author.id) + ".png";
  }
}