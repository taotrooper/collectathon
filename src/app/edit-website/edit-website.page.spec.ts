import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditWebsitePage } from './edit-website.page';

describe('EditWebsitePage', () => {
  let component: EditWebsitePage;
  let fixture: ComponentFixture<EditWebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWebsitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditWebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
