import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponendComponent } from './header-componend.component';

describe('HeaderComponendComponent', () => {
  let component: HeaderComponendComponent;
  let fixture: ComponentFixture<HeaderComponendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponendComponent]
    });
    fixture = TestBed.createComponent(HeaderComponendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
