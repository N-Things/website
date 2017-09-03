import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBlogComponent } from './inner-blog.component';

describe('InnerBlogComponent', () => {
  let component: InnerBlogComponent;
  let fixture: ComponentFixture<InnerBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
