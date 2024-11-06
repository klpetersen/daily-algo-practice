import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicetComponent } from './new-ticet.component';

describe('NewTicetComponent', () => {
  let component: NewTicetComponent;
  let fixture: ComponentFixture<NewTicetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTicetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTicetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
