import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNeosaludComponent } from './detalle-neosalud.component';

describe('DetalleNeosaludComponent', () => {
  let component: DetalleNeosaludComponent;
  let fixture: ComponentFixture<DetalleNeosaludComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleNeosaludComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNeosaludComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
