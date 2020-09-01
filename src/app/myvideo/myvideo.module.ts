import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyvideoPageRoutingModule } from './myvideo-routing.module';

import { MyvideoPage } from './myvideo.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    MyvideoPageRoutingModule
  ],
  declarations: [MyvideoPage]
})
export class MyvideoPageModule {}
