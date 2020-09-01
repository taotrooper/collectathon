import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMusicPage } from './edit-music.page';

describe('EditMusicPage', () => {
  let component: EditMusicPage;
  let fixture: ComponentFixture<EditMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
