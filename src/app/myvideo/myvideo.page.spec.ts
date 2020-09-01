import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyvideoPage } from './myvideo.page';

describe('MyvideoPage', () => {
  let component: MyvideoPage;
  let fixture: ComponentFixture<MyvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
