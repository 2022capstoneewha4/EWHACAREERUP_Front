import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecMoreComponent } from './spec-more.component';

describe('SpecMoreComponent', () => {
  let component: SpecMoreComponent;
  let fixture: ComponentFixture<SpecMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
