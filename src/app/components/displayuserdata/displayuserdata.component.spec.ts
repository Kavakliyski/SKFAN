import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayuserdataComponent } from './displayuserdata.component';

describe('DisplayuserdataComponent', () => {
  let component: DisplayuserdataComponent;
  let fixture: ComponentFixture<DisplayuserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayuserdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayuserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
