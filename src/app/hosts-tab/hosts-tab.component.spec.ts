import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostsTabComponent } from './hosts-tab.component';

describe('HostsTabComponent', () => {
  let component: HostsTabComponent;
  let fixture: ComponentFixture<HostsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
