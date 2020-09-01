import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateComicPage } from './create-comic.page';

describe('CreateComicPage', () => {
  let component: CreateComicPage;
  let fixture: ComponentFixture<CreateComicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateComicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
