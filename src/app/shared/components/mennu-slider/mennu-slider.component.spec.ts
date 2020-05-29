import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MennuSliderComponent } from './mennu-slider.component';

describe('MennuSliderComponent', () => {
  let component: MennuSliderComponent;
  let fixture: ComponentFixture<MennuSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MennuSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MennuSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
