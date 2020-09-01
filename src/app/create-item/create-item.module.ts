import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateItemPageRoutingModule } from './create-item-routing.module';

import { CreateItemPage } from './create-item.page';
import { CreateSeriesPageModule } from '../create-series/create-series.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateItemPageRoutingModule,
    CreateSeriesPageModule
  ],
  declarations: [CreateItemPage]
})
export class CreateItemPageModule {}
