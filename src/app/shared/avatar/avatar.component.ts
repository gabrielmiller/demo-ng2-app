import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../shared/interfaces';


@Component({
  moduleId: module.id,
  selector: 'avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.css']
})
export class AvatarComponent {
  
  @Input('author') author: Author;
  
  src: string;

  constructor() {
    // Assign each author an image, 1 through 8, deterministically
    switch (this.author.first.slice(0,1)) {
      case "A":
      case "B":
      case "C":
      case "D":
        this.src = "cat1.png";
        break;
      case "E":
      case "F":
      case "G":
        this.src = "cat2.png";
        break;
      case "H":
      case "I":
      case "J":
        this.src = "cat3.png";
        break;
      case "K":
      case "L":
      case "M":
        this.src = "cat4.png";
        break;
      case "N":
      case "O":
      case "P":
      case "Q":
        this.src = "cat5.png";
        break;
      case "R":
      case "S":
      case "T":
        this.src = "cat6.png";
        break;
      case "U":
      case "V":
      case "W":
        this.src = "cat7.png";
        break;
      case "X":
      case "Y":
      case "Z":
        this.src = "cat8.png";
        break;
    }
  }
}