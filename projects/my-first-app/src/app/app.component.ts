import { Employee } from 'projects/my-lib/src/lib';
import { User } from '../../../my-lib/src/lib/models/User';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:User;
  emp:Employee
  constructor(){
    this.user={firstName:'Ahmed',lastName:'Badry'}
    this.emp={id:"101",email:"Ahmed@email.com"}
  }
  ngOnInit(): void {

  }
  title = 'my-first-app';
}
