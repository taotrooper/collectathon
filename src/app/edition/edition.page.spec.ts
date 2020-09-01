import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditionPage } from './edition.page';

describe('EditionPage', () => {
  let component: EditionPage;
  let fixture: ComponentFixture<EditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
