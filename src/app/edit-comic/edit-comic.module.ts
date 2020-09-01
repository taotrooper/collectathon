import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditComicPageRoutingModule } from './edit-comic-routing.module';

import { EditComicPage } from './edit-comic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditComicPageRoutingModule
  ],
  declarations: [EditComicPage]
})
export class EditComicPageModule {}
