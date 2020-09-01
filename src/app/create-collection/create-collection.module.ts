import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCollectionPageRoutingModule } from './create-collection-routing.module';

import { CreateCollectionPage } from './create-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateCollectionPageRoutingModule
  ],
  declarations: [CreateCollectionPage]
})
export class CreateCollectionPageModule {}
