import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVideoPageRoutingModule } from './create-video-routing.module';

import { CreateVideoPage } from './create-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateVideoPageRoutingModule
  ],
  declarations: [CreateVideoPage]
})
export class CreateVideoPageModule {}
