import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstabComponent } from './lista-estab.component';

describe('ListaEstabComponent', () => {
  let component: ListaEstabComponent;
  let fixture: ComponentFixture<ListaEstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
