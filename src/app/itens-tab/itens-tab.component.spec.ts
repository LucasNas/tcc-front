import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensTabComponent } from './itens-tab.component';

describe('ItensTabComponent', () => {
  let component: ItensTabComponent;
  let fixture: ComponentFixture<ItensTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
