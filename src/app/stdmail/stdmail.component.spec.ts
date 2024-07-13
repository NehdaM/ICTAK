import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdmailComponent } from './stdmail.component';

describe('StdmailComponent', () => {
  let component: StdmailComponent;
  let fixture: ComponentFixture<StdmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
