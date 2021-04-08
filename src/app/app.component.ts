import { Component } from '@angular/core';
import * as usersInfo from '../mock/usersInfo.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-app';
  usersInfo = usersInfo.result.orgUsers;

  ngAfterViewInit(): void {}
}
