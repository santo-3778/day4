import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistpageComponent } from './distpage.component';

describe('DistpageComponent', () => {
  let component: DistpageComponent;
  let fixture: ComponentFixture<DistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
