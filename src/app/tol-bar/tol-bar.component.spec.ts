import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TolBarComponent } from './tol-bar.component';

describe('TolBarComponent', () => {
  let component: TolBarComponent;
  let fixture: ComponentFixture<TolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
