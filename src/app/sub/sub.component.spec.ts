import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationService } from '../navigation.service';

import { SubComponent } from './sub.component';

describe('SubComponent', () => {
  let component: SubComponent;
  let fixture: ComponentFixture<SubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubComponent],
      providers: [
        {
          provide: NavigationService,
          useValue: jasmine.createSpyObj<NavigationService>(['back']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
