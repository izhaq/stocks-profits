import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFotterComponent } from './table-fotter.component';

describe('TableFotterComponent', () => {
  let component: TableFotterComponent;
  let fixture: ComponentFixture<TableFotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
