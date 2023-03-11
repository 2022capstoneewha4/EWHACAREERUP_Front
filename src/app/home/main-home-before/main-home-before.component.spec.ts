import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeBeforeComponent } from './main-home-before.component';

describe('MainHomeBeforeComponent', () => {
  let component: MainHomeBeforeComponent;
  let fixture: ComponentFixture<MainHomeBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeBeforeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
