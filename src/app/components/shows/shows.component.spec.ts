import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowsComponent } from './shows.component';
import { HttpClientModule } from "@angular/common/http";

describe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
