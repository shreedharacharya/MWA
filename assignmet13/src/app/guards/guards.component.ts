import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guards',
  template: `
  <h2>
    Error!!
  </h2>
  <p> Oops!! Something went wrong... </p>

  <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
`
})
export class GuardsComponent  {

 
  constructor(private router: Router) {
   
   }

  onNavigate() {
    this.router.navigate(['/']);
}

}
