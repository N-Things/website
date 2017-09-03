import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerServicesComponent } from './inner-services.component';

describe('InnerServicesComponent', () => {
  let component: InnerServicesComponent;
  let fixture: ComponentFixture<InnerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
