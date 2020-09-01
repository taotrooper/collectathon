import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllseriesPageRoutingModule } from './allseries-routing.module';

import { AllseriesPage } from './allseries.page';
import { CreateSeriesPageModule } from '../create-series/create-series.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllseriesPageRoutingModule,
    CreateSeriesPageModule
  ],
  declarations: [AllseriesPage]
})
export class AllseriesPageModule {}
