import { Component, Input, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  removeCurrentLevelItems(usersInfo: any, parentId: number) {
    const users = usersInfo.filter((user: any) => user.parent !== parentId);
    return users;
  }
}
