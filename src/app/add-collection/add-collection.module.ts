import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCollectionPageRoutingModule } from './add-collection-routing.module';

import { AddCollectionPage } from './add-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddCollectionPageRoutingModule
  ],
  declarations: [AddCollectionPage]
})
export class AddCollectionPageModule {}
