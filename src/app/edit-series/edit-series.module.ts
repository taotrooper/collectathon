import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSeriesPageRoutingModule } from './edit-series-routing.module';

import { EditSeriesPage } from './edit-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditSeriesPageRoutingModule
  ],
  declarations: [EditSeriesPage]
})
export class EditSeriesPageModule {}
