import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBookPage } from './create-book.page';

describe('CreateBookPage', () => {
  let component: CreateBookPage;
  let fixture: ComponentFixture<CreateBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
