import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfortypeComponent } from './formfortype.component';

describe('FormfortypeComponent', () => {
  let component: FormfortypeComponent;
  let fixture: ComponentFixture<FormfortypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfortypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
