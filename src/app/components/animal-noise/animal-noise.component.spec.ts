import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalNoiseComponent } from './animal-noise.component';

describe('AnimalNoiseComponent', () => {
  let component: AnimalNoiseComponent;
  let fixture: ComponentFixture<AnimalNoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalNoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalNoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
