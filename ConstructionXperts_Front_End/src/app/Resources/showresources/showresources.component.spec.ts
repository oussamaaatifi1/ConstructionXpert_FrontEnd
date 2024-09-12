import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowresourcesComponent } from './showresources.component';

describe('ShowresourcesComponent', () => {
  let component: ShowresourcesComponent;
  let fixture: ComponentFixture<ShowresourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowresourcesComponent]
    });
    fixture = TestBed.createComponent(ShowresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
