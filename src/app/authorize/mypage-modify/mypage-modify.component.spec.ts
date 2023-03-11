import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageModifyComponent } from './mypage-modify.component';

describe('MypageModifyComponent', () => {
  let component: MypageModifyComponent;
  let fixture: ComponentFixture<MypageModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypageModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypageModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
