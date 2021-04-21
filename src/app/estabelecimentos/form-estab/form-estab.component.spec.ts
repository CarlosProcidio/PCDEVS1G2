import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstabComponent } from './form-estab.component';

describe('FormEstabComponent', () => {
  let component: FormEstabComponent;
  let fixture: ComponentFixture<FormEstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
