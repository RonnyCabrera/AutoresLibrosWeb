import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloAutorComponent } from './modelo-autor.component';

describe('ModeloAutorComponent', () => {
  let component: ModeloAutorComponent;
  let fixture: ComponentFixture<ModeloAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
