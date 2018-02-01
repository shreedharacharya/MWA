import { Directive } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Input , OnInit} from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[visibility]'
})
export class MyvisibilityDirective  {

  @HostBinding('style.display') display;
  @Input() visible:Boolean;
  ngOnInit(){
    if(this.visible){
      this.display = 'block';
    }else{
      this.display='none';
    }

  }
 
  constructor() { }

}
