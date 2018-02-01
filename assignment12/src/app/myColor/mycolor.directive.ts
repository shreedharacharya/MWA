import { Directive, Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  private color:Array<string> = ["red", "blue", "pink", "green", "purple", "cyan", "maroon", "orange", "yellow"];
  
  selectedColor: string;
  @Output() colorChange = new EventEmitter<string>();

  @HostBinding('style.color') mycolor;
  @HostListener('click')
  changeColor():void{
    this.selectedColor = this.color[Math.floor(Math.random() * this.color.length)];
    this.colorChange.emit(this.selectedColor);
    this.mycolor = this.selectedColor;
  }
  constructor() { }

}
