import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppareilsComponent } from './list-appareils.component';

describe('ListAppareilsComponent', () => {
  let component: ListAppareilsComponent;
  let fixture: ComponentFixture<ListAppareilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAppareilsComponent]
    });
    fixture = TestBed.createComponent(ListAppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
