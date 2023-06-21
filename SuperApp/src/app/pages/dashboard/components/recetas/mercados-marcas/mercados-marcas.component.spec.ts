import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadosMarcasComponent } from './mercados-marcas.component';

describe('MercadosMarcasComponent', () => {
  let component: MercadosMarcasComponent;
  let fixture: ComponentFixture<MercadosMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadosMarcasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadosMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
