import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeArrowComponent } from './time-arrow.component';

describe('TimeArrowComponent', () => {
  let component: TimeArrowComponent;
  let fixture: ComponentFixture<TimeArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
