import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcodeComponent } from './ccode.component';

describe('CcodeComponent', () => {
  let component: CcodeComponent;
  let fixture: ComponentFixture<CcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
