import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllpeoplePage } from './allpeople.page';

describe('AllpeoplePage', () => {
  let component: AllpeoplePage;
  let fixture: ComponentFixture<AllpeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpeoplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllpeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
