import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveMoreComponent } from './archive-more.component';

describe('ArchiveMoreComponent', () => {
  let component: ArchiveMoreComponent;
  let fixture: ComponentFixture<ArchiveMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
