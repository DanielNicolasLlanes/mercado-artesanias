import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WspButton } from './wsp-button';

describe('WspButton', () => {
  let component: WspButton;
  let fixture: ComponentFixture<WspButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WspButton],
    }).compileComponents();

    fixture = TestBed.createComponent(WspButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
