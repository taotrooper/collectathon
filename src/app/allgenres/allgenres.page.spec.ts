import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllgenresPage } from './allgenres.page';

describe('AllgenresPage', () => {
  let component: AllgenresPage;
  let fixture: ComponentFixture<AllgenresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllgenresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllgenresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
