import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHierarchyComponent } from './users-hierarchy.component';

describe('UsersHierarchyComponent', () => {
  let component: UsersHierarchyComponent;
  let fixture: ComponentFixture<UsersHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
