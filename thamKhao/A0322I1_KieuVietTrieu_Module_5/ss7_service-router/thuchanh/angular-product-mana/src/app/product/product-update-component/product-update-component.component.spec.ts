import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateComponentComponent } from './product-update-component.component';

describe('ProductUpdateComponentComponent', () => {
  let component: ProductUpdateComponentComponent;
  let fixture: ComponentFixture<ProductUpdateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUpdateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
