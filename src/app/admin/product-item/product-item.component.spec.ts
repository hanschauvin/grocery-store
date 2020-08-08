import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
  let component: AdminProductItemComponent;
  let fixture: ComponentFixture<AdminProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
