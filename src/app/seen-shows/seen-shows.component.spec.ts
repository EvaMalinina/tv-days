import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenShowsComponent } from './seen-shows.component';

describe('SeenShowsComponent', () => {
  let component: SeenShowsComponent;
  let fixture: ComponentFixture<SeenShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
