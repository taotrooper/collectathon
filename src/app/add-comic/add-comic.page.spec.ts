import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddComicPage } from './add-comic.page';

describe('AddComicPage', () => {
  let component: AddComicPage;
  let fixture: ComponentFixture<AddComicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddComicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
