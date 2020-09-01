import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditItemPageRoutingModule } from './edit-item-routing.module';

import { EditItemPage } from './edit-item.page';
import { CreateSeriesPageModule } from '../create-series/create-series.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditItemPageRoutingModule,
    CreateSeriesPageModule
  ],
  declarations: [EditItemPage]
})
export class EditItemPageModule {}
