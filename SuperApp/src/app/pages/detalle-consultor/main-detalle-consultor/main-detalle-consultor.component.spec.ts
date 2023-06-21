import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetalleConsultorComponent } from './main-detalle-consultor.component';

describe('MainDetalleConsultorComponent', () => {
  let component: MainDetalleConsultorComponent;
  let fixture: ComponentFixture<MainDetalleConsultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetalleConsultorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetalleConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
