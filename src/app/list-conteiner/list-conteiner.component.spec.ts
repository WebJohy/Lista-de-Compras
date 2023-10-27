import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConteinerComponent } from './list-conteiner.component';

describe('ListConteinerComponent', () => {
  let component: ListConteinerComponent;
  let fixture: ComponentFixture<ListConteinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListConteinerComponent]
    });
    fixture = TestBed.createComponent(ListConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
