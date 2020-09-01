import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateSeriesPage } from './create-series.page';

describe('CreateSeriesPage', () => {
  let component: CreateSeriesPage;
  let fixture: ComponentFixture<CreateSeriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSeriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
