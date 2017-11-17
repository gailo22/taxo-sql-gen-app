import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotclassifiedComponent } from './notclassified.component';

describe('NotclassifiedComponent', () => {
  let component: NotclassifiedComponent;
  let fixture: ComponentFixture<NotclassifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotclassifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotclassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
