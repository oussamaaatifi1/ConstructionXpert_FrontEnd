import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresourcesComponent } from './addresources.component';

describe('AddresourcesComponent', () => {
  let component: AddresourcesComponent;
  let fixture: ComponentFixture<AddresourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddresourcesComponent]
    });
    fixture = TestBed.createComponent(AddresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
