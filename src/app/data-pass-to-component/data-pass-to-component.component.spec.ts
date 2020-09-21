import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassToComponentComponent } from './data-pass-to-component.component';

describe('DataPassToComponentComponent', () => {
  let component: DataPassToComponentComponent;
  let fixture: ComponentFixture<DataPassToComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPassToComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassToComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
