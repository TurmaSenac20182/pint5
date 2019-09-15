import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgEditarEstoquePage } from './pg-editar-estoque.page';

describe('PgEditarEstoquePage', () => {
  let component: PgEditarEstoquePage;
  let fixture: ComponentFixture<PgEditarEstoquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgEditarEstoquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgEditarEstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
