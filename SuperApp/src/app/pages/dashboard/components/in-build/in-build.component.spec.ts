/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InBuildComponent } from './in-build.component';

describe('InBuildComponent', () => {
  let component: InBuildComponent;
  let fixture: ComponentFixture<InBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
