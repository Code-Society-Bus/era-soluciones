import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaMMComponent } from './entrega-mm.component';

describe('EntregaMMComponent', () => {
  let component: EntregaMMComponent;
  let fixture: ComponentFixture<EntregaMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaMMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
