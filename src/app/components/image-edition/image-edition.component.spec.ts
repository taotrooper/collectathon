import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageEditionComponent } from './image-edition.component';

describe('ImageEditionComponent', () => {
  let component: ImageEditionComponent;
  let fixture: ComponentFixture<ImageEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEditionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
