import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditComicPage } from './edit-comic.page';

describe('EditComicPage', () => {
  let component: EditComicPage;
  let fixture: ComponentFixture<EditComicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditComicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
