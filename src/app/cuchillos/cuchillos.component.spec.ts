import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuchillosComponent } from './cuchillos.component';

describe('CuchillosComponent', () => {
  let component: CuchillosComponent;
  let fixture: ComponentFixture<CuchillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuchillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuchillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
