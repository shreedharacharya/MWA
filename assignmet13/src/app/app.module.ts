import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { GuardsComponent } from './guards/guards.component';
import { DbService } from './services/db.service';
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StudentsComponent,
    HomeComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [DbService , LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
