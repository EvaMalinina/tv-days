import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundShowsComponent } from './found-shows.component';

describe('FoundShowsComponent', () => {
  let component: FoundShowsComponent;
  let fixture: ComponentFixture<FoundShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
