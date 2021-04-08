import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users-hierarchy',
  templateUrl: './users-hierarchy.component.html',
  styleUrls: ['./users-hierarchy.component.scss'],
})
export class UsersHierarchyComponent implements OnInit {
  @Input()
  parentId!: number;
  @Input()
  usersInfo!: any;
  @Input()
  level: number = 1;
  userImg = `/assets/img/user${this.level}.svg`;

  constructor() {}

  ngOnInit(): void {}

  removeCurrentLevelItems(usersInfo: any, parentId: number) {
    const users = usersInfo.filter((user: any) => user.parent !== parentId);
    if (users.length) {
      this.level += 1;
      `/assets/img/user${this.level}.svg`;
    }

    console.log(this.userImg);
    return users;
  }
}
