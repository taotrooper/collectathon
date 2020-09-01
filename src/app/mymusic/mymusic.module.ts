import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymusicPageRoutingModule } from './mymusic-routing.module';

import { MymusicPage } from './mymusic.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    MymusicPageRoutingModule
  ],
  declarations: [MymusicPage]
})
export class MymusicPageModule {}
