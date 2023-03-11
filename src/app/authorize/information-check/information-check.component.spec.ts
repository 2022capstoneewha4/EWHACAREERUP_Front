import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCheckComponent } from './information-check.component';

describe('InformationCheckComponent', () => {
  let component: InformationCheckComponent;
  let fixture: ComponentFixture<InformationCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
