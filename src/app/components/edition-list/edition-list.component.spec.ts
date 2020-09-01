import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditionListComponent } from './edition-list.component';

describe('EditionListComponent', () => {
  let component: EditionListComponent;
  let fixture: ComponentFixture<EditionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
