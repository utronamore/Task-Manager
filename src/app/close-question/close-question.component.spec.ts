import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseQuestionComponent } from './close-question.component';

describe('CloseQuestionComponent', () => {
  let component: CloseQuestionComponent;
  let fixture: ComponentFixture<CloseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
