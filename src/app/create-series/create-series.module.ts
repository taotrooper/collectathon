import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSeriesPageRoutingModule } from './create-series-routing.module';

import { CreateSeriesPage } from './create-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateSeriesPageRoutingModule
  ],
  declarations: [CreateSeriesPage]
})
export class CreateSeriesPageModule {}
