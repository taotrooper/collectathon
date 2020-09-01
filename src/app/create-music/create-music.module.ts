import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMusicPageRoutingModule } from './create-music-routing.module';

import { CreateMusicPage } from './create-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateMusicPageRoutingModule
  ],
  declarations: [CreateMusicPage]
})
export class CreateMusicPageModule {}
