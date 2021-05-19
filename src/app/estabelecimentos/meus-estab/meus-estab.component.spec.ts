import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusEstabComponent } from './meus-estab.component';

describe('MeusEstabComponent', () => {
  let component: MeusEstabComponent;
  let fixture: ComponentFixture<MeusEstabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusEstabComponent ]
    })
    
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
