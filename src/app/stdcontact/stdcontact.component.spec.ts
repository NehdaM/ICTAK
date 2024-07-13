import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdcontactComponent } from './stdcontact.component';

describe('StdcontactComponent', () => {
  let component: StdcontactComponent;
  let fixture: ComponentFixture<StdcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdcontactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
