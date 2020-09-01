import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVideoPageRoutingModule } from './edit-video-routing.module';

import { EditVideoPage } from './edit-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditVideoPageRoutingModule
  ],
  declarations: [EditVideoPage]
})
export class EditVideoPageModule {}
