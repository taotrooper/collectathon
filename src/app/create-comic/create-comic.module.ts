import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateComicPageRoutingModule } from './create-comic-routing.module';

import { CreateComicPage } from './create-comic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateComicPageRoutingModule
  ],
  declarations: [CreateComicPage]
})
export class CreateComicPageModule {}
