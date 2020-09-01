import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyitemsPage } from './myitems.page';

describe('MyitemsPage', () => {
  let component: MyitemsPage;
  let fixture: ComponentFixture<MyitemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyitemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyitemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
