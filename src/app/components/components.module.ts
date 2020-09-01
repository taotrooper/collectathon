import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditionListComponent } from './edition-list/edition-list.component';
import { PersonaComponent } from './persona/persona.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { DetailMusicComponent } from './detail-music/detail-music.component';
import { DetailVideoComponent } from './detail-video/detail-video.component';
import { DetailGameComponent } from './detail-game/detail-game.component';
import { DetailComicComponent } from './detail-comic/detail-comic.component';
import { WebsiteListComponent } from './website-list/website-list.component';
import { PresentActionSheetComponent } from './present-action-sheet/present-action-sheet.component';
import { ImageEditionComponent } from './image-edition/image-edition.component';


@NgModule({
  declarations: [EditionListComponent, 
    PersonaComponent,
    DetailBookComponent,
    DetailMusicComponent,
    DetailVideoComponent,
    DetailGameComponent,
    DetailComicComponent,
    WebsiteListComponent,
    ImageEditionComponent,
    PresentActionSheetComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [EditionListComponent,
    PersonaComponent,
    DetailBookComponent,
    DetailMusicComponent,
    DetailVideoComponent,
    DetailGameComponent,
    DetailComicComponent,
    WebsiteListComponent,
    ImageEditionComponent,
    PresentActionSheetComponent
  ]
})
export class ComponentsModule { }
