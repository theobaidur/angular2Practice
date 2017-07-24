import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoolComponent } from './shool.component';

describe('ShoolComponent', () => {
  let component: ShoolComponent;
  let fixture: ComponentFixture<ShoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
