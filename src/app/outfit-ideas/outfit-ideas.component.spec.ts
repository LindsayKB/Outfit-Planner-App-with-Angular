import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitIdeasComponent } from './outfit-ideas.component';

describe('OutfitIdeasComponent', () => {
  let component: OutfitIdeasComponent;
  let fixture: ComponentFixture<OutfitIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutfitIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
