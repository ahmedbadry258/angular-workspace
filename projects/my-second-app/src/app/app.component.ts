import { Component } from '@angular/core';
import { User } from 'projects/my-lib/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';
  user:User={firstName:"Mohamed",lastName:"Ali"}
}
