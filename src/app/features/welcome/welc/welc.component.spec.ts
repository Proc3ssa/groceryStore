import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcComponent } from './welc.component';

describe('WelcComponent', () => {
  let component: WelcComponent;
  let fixture: ComponentFixture<WelcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
