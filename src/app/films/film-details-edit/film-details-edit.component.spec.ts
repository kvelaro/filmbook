import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsEditComponent } from './film-details-edit.component';

describe('FilmDetailsEditComponent', () => {
  let component: FilmDetailsEditComponent;
  let fixture: ComponentFixture<FilmDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
