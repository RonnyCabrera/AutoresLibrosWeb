import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloLibroComponent } from './modelo-libro.component';

describe('ModeloLibroComponent', () => {
  let component: ModeloLibroComponent;
  let fixture: ComponentFixture<ModeloLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
