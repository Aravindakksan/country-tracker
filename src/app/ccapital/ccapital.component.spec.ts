import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcapitalComponent } from './ccapital.component';

describe('CcapitalComponent', () => {
  let component: CcapitalComponent;
  let fixture: ComponentFixture<CcapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
