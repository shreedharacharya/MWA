import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';

// default generated code.
// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrls: ['./counter.component.css']
// })

//export class CounterComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

// 1st qsn solution
/* @Component({
  selector: 'app-counter',
  template: `
  <h1>Component 7:</h1>
  <p><button (click) = "decrease()">-</button>
  {{counter}}
   <button (click) = "increase()">+</button> 
   </p>
   <!-- <input value="{{counter}}" [(ngModel)]="counter" /><br>
   <input [ngModel]="counter" (ngModelChange)="counter=$event"><br>
   <input [value]="counter" (input)="counter=$event.target.value"> -->
`,
  styles: []
})
export class CounterComponent {
  counter: number;
  constructor() {
    this.counter = 0;
  }
  increase() {
    this.counter = this.counter + 1;
    return false;
  }
  decrease() {
    this.counter = this.counter - 1;
    return false;
  }
}  */


// 3rd qsn solution
@Component({
  selector: 'app-counter',
  template: `
  <h1>COUNTER</h1>
  <button (click) = "decrease()"> - </button>
  {{counterValue}}
  <button (click) = "increase()"> + </button>
 <br/>
 {{counterMessage}}
  `,
  styles: ['h1 {color:yellow}']
})




export class CounterComponent implements OnInit {
  @Input() counterValue:number = 0;
  @Input() counterMessage:string="";

  @Output() counterChange = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit() {
  }
  increase() {
    this.counterValue = this.counterValue + 1;
    this.counterChange.emit(this.counterValue);
   // return false;
  }
  decrease() {
    this.counterValue = this.counterValue - 1;
    this.counterChange.emit(this.counterValue);
   // return false;
  }
 
}

