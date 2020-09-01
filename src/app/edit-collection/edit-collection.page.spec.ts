import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCollectionPage } from './edit-collection.page';

describe('EditCollectionPage', () => {
  let component: EditCollectionPage;
  let fixture: ComponentFixture<EditCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
