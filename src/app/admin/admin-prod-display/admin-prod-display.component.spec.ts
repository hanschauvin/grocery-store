import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdDisplayComponent } from './admin-prod-display.component';

describe('AdminProdDisplayComponent', () => {
  let component: AdminProdDisplayComponent;
  let fixture: ComponentFixture<AdminProdDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProdDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
