import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwhainCheckComponent } from './ewhain-check.component';

describe('EwhainCheckComponent', () => {
  let component: EwhainCheckComponent;
  let fixture: ComponentFixture<EwhainCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwhainCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EwhainCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
