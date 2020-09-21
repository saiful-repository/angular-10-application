import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormControlWithRegularFormComponent } from './dynamic-form-control-with-regular-form.component';

describe('DynamicFormControlWithRegularFormComponent', () => {
  let component: DynamicFormControlWithRegularFormComponent;
  let fixture: ComponentFixture<DynamicFormControlWithRegularFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormControlWithRegularFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormControlWithRegularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
