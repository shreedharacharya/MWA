import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-array',
  template: `<h1>Array of string as input and displaying as un-ordered list.</h1>
  <div>
    <ul>
      <li *ngFor="let strr of array"> {{strr}} </li>
    </ul>
  </div>
  <h1>Custom directive "upper" used to convert elements to uppercase</h1>
    <div>
      <ol>
        <li *ngFor="let str of array" appUpper> {{str}} </li>
      </ol>
    </div>

    <h1>Custom directive "visibility" used to show or hide contents</h1>
    <div>
      <ul visibility [visible] = "this.visible">
        {{array.toString()}} 
      </ul>
    </div>

    <h1>Custom directive "mycolor" used to show color change from array of color</h1>
    <div>
    <ul>
      <li *ngFor="let str of array" appMycolor (colorChange) = "colorChange($event)"> {{str}} </li>
    </ul>
  </div>
  {{changedColor}}
  `,
  styleUrls: ['./array.component.css']
//  ,inputs: ['array']
})
export class ArrayComponent implements OnInit {

  visible:Boolean = true;
  changedColor?:string;
 @Input() array:Array<string>=[];
  constructor() { }

  ngOnInit() {
  }
  colorChange(color: string) {
    this.changedColor = "selected color is " + color;
  }

}
