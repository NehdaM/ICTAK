import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdhelpComponent } from './stdhelp.component';

describe('StdhelpComponent', () => {
  let component: StdhelpComponent;
  let fixture: ComponentFixture<StdhelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdhelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
