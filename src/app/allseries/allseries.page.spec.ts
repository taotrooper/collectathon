import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllseriesPage } from './allseries.page';

describe('AllseriesPage', () => {
  let component: AllseriesPage;
  let fixture: ComponentFixture<AllseriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllseriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllseriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
