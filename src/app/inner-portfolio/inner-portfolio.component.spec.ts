import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerPortfolioComponent } from './inner-portfolio.component';

describe('InnerPortfolioComponent', () => {
  let component: InnerPortfolioComponent;
  let fixture: ComponentFixture<InnerPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
