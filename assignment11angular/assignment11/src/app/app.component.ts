import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  template: `<app-counter [counterValue]="this.counterValue" [counterMessage] = "this.componentCounterValue" (counterChange) = "counterChange($event)"></app-counter>
 <br/>
 <input type ="number" (keyup)="onkey($event.target.value)"/>
 `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounterValue?:string;
  counterValue:number = 5;

  counterChange(counter:number){
    this.componentCounterValue = "Component counter Value = "+ counter;
  }

  onkey(data){
    let intVal = parseInt(data);
    if(isNaN(intVal)) return false;
    else this.counterValue = intVal;
  }
}
