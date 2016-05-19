import { Injectable } from '@angular/core';

@Injectable()
export class CatService {

  constructor() {}

  getName(id: number) : string {
    switch(id) {
      case 1:
        return "Meow Meow Fuzzyface";
      case 2:
        return "Sylvester";
      case 3:
        return "Felix";
      case 4:
        return "Garfield";
      case 5:
        return "Stimpy";
      case 6:
        return "Mufasa";
      case 7:
        return "Keanu";
      default:
        return "Hobbes";
    }
  }
}