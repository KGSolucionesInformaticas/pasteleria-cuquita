import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPastelesComponent } from './categoria-pasteles.component';

describe('CategoriaPastelesComponent', () => {
  let component: CategoriaPastelesComponent;
  let fixture: ComponentFixture<CategoriaPastelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaPastelesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriaPastelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
