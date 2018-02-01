import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-array [array] = "this.arrayStr"></app-array>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayStr :Array<String>;
  constructor(){
    this.arrayStr = ["Shreedhar Acharya","Modern Web Applications","Nepal"]
  }
}
