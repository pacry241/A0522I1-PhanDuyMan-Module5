import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarbavComponent } from './narbav.component';

describe('NarbavComponent', () => {
  let component: NarbavComponent;
  let fixture: ComponentFixture<NarbavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarbavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarbavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
