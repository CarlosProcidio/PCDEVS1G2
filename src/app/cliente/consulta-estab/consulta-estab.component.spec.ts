import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEstabComponent } from './consulta-estab.component';

describe('ConsultaEstabComponent', () => {
  let component: ConsultaEstabComponent;
  let fixture: ComponentFixture<ConsultaEstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaEstabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
