import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSeriesPage } from './edit-series.page';

describe('EditSeriesPage', () => {
  let component: EditSeriesPage;
  let fixture: ComponentFixture<EditSeriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSeriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
