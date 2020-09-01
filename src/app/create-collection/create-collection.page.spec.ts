import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCollectionPage } from './create-collection.page';

describe('CreateCollectionPage', () => {
  let component: CreateCollectionPage;
  let fixture: ComponentFixture<CreateCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
