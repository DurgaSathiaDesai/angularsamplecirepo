import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledemoComponent } from './sampledemo.component';

describe('SampledemoComponent', () => {
  let component: SampledemoComponent;
  let fixture: ComponentFixture<SampledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampledemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
