import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndComponent } from './show-ind.component';

describe('ShowIndComponent', () => {
  let component: ShowIndComponent;
  let fixture: ComponentFixture<ShowIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
