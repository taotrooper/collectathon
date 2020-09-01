import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCollectionPage } from './add-collection.page';

describe('AddCollectionPage', () => {
  let component: AddCollectionPage;
  let fixture: ComponentFixture<AddCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
