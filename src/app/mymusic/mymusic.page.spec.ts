import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MymusicPage } from './mymusic.page';

describe('MymusicPage', () => {
  let component: MymusicPage;
  let fixture: ComponentFixture<MymusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MymusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
