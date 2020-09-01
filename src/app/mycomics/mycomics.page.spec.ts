import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycomicsPage } from './mycomics.page';

describe('MycomicsPage', () => {
  let component: MycomicsPage;
  let fixture: ComponentFixture<MycomicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycomicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
