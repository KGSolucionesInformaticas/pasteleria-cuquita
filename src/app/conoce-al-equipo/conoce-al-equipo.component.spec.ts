import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoceAlEquipoComponent } from './conoce-al-equipo.component';

describe('ConoceAlEquipoComponent', () => {
  let component: ConoceAlEquipoComponent;
  let fixture: ComponentFixture<ConoceAlEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConoceAlEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConoceAlEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
