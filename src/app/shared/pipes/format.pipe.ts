import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class Format implements PipeTransform {
  
  constructor(){
  }
  
  transform(value: any, format: string): string {
    if (format === "name") {
      return value.name;
    }
    if (format === "cat") {
      return this.getSentence(value); 
  }
    return "N/A";
  }
  
  
  getSentence(sentence: string) : string {
    let words = sentence.split(" ");
    let output = [];

    for (var i = 0; i < words.length; i++) {
      output[i] = this.getWord(words[i]);
    }

    return output.join(" ") + "!";
  }

  getWord(word: string) : string {
    let letter = word.slice(0,1);
    switch (letter.toLowerCase()) {
      case "a":
      case "b":
      case "c":
        return "meow";
      case "d":
      case "e":
      case "f":
        return "purr";
      case "g":
      case "h":
      case "i":
        return "reeow";
      case "j":
      case "k":
      case "l":
        return "mew";
      case "m":
      case "n":
      case "o":
        return "mreep";
      case "p":
      case "q":
      case "r":
        return "mer ROW";
      case "s":
      case "t":
      case "u":
        return "merrow";
      case "v":
      case "w":
      case "x":
        return "myup";
      case "y":
      case "z":
        return "woof";
      default:
        return "MRREEEOW";
    }
  }
}