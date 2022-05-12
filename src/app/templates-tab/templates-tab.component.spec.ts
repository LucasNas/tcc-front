import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesTabComponent } from './templates-tab.component';

describe('TemplatesTabComponent', () => {
  let component: TemplatesTabComponent;
  let fixture: ComponentFixture<TemplatesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
