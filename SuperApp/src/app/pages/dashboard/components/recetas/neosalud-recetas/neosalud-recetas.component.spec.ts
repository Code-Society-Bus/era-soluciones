import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeosaludRecetasComponent } from './neosalud-recetas.component';

describe('NeosaludRecetasComponent', () => {
  let component: NeosaludRecetasComponent;
  let fixture: ComponentFixture<NeosaludRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeosaludRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeosaludRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
