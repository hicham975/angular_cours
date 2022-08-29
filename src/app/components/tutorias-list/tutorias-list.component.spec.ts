import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriasListComponent } from './tutorias-list.component';

describe('TutoriasListComponent', () => {
  let component: TutoriasListComponent;
  let fixture: ComponentFixture<TutoriasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoriasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoriasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
