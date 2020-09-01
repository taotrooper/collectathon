import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateVideoPage } from './create-video.page';

describe('CreateVideoPage', () => {
  let component: CreateVideoPage;
  let fixture: ComponentFixture<CreateVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
