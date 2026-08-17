/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should start with count = 0', () => {
    expect(component.count).toBe(0);
  });

  it('should increment count when increment() is called', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement count when decrement() is called', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('should reset count to 0 when reset() is called', () => {
    component.count = 5;
    component.reset();
    expect(component.count).toBe(0);
  });

  it('should update the displayed count in the template', () => {
    component.increment();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('1');
  });
});
