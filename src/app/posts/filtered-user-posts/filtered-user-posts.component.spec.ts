import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredUserPostsComponent } from './filtered-user-posts.component';

describe('FilteredUserPostsComponent', () => {
  let component: FilteredUserPostsComponent;
  let fixture: ComponentFixture<FilteredUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredUserPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
