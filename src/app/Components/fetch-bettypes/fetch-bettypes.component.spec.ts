import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchBettypesComponent } from './fetch-bettypes.component';

describe('FetchBettypesComponent', () => {
  let component: FetchBettypesComponent;
  let fixture: ComponentFixture<FetchBettypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchBettypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchBettypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
