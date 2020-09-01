import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateWebsitePage } from './create-website.page';

describe('CreateWebsitePage', () => {
  let component: CreateWebsitePage;
  let fixture: ComponentFixture<CreateWebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWebsitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
