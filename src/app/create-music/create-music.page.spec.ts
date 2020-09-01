import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateMusicPage } from './create-music.page';

describe('CreateMusicPage', () => {
  let component: CreateMusicPage;
  let fixture: ComponentFixture<CreateMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
