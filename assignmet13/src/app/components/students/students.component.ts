import { Component, OnInit } from '@angular/core';
import { User } from '../../model/usermodel';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  users:User[];
  constructor(private dbService:DbService) {
    this.users = dbService.getData();
   }

  ngOnInit() {
  }

}
