import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MygamesPage } from './mygames.page';

describe('MygamesPage', () => {
  let component: MygamesPage;
  let fixture: ComponentFixture<MygamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MygamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
