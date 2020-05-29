import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShipmentComponent } from './input-shipment.component';

describe('InputShipmentComponent', () => {
  let component: InputShipmentComponent;
  let fixture: ComponentFixture<InputShipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputShipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
