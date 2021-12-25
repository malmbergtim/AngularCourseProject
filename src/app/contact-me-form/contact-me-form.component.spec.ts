import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeFormComponent } from './contact-me-form.component';

describe('ContactMeFormComponent', () => {
  let component: ContactMeFormComponent;
  let fixture: ComponentFixture<ContactMeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
