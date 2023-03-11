import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMoreComponent } from './action-more.component';

describe('ActionMoreComponent', () => {
  let component: ActionMoreComponent;
  let fixture: ComponentFixture<ActionMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
