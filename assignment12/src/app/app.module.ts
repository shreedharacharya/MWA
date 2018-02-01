import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArrayComponent } from './arr/array.component';
import { UpperDirective } from './upper/upper.directive';
import { MyvisibilityDirective } from './myVisibility/myvisibility.directive';
import { MycolorDirective } from './myColor/mycolor.directive';


@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
