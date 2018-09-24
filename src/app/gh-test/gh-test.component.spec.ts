import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GHTestComponent } from './gh-test.component';

describe('GHTestComponent', () => {
  let component: GHTestComponent;
  let fixture: ComponentFixture<GHTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GHTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GHTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
