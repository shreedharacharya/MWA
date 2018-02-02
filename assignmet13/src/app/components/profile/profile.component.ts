import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {User} from '../../model/usermodel';
import {ActivatedRoute} from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private subscription:Subscription;c
  id:string;
  user:User;

  constructor(private dbservice:DbService, private activatedRoute:ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (param:any) =>{
        this.id = param['id'];
        this.user = dbservice.getDataById(this.id);
      }
    )
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
