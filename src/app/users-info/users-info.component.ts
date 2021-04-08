import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss'],
})
export class UsersInfoComponent implements OnInit {
  @Input()
  userInfo!: any;
  @Input()
  parentId!: number;
  @Input()
  userImg!: string;
  // @Input()
  // level!: number;

  constructor() {}

  ngOnInit(): void {}
}
