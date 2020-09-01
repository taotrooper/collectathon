import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGamePage } from './edit-game.page';

describe('EditGamePage', () => {
  let component: EditGamePage;
  let fixture: ComponentFixture<EditGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
