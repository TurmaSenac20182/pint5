import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgConsultaPage } from './pg-consulta.page';

describe('PgConsultaPage', () => {
  let component: PgConsultaPage;
  let fixture: ComponentFixture<PgConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgConsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
