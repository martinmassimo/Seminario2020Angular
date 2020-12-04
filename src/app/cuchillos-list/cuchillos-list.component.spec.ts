import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuchillosListComponent } from './cuchillos-list.component';

describe('CuchillosListComponent', () => {
  let component: CuchillosListComponent;
  let fixture: ComponentFixture<CuchillosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuchillosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuchillosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
