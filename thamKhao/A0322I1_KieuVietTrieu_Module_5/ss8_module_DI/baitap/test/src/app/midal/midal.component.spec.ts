import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidalComponent } from './midal.component';

describe('MidalComponent', () => {
  let component: MidalComponent;
  let fixture: ComponentFixture<MidalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
