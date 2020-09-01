import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollectionPageRoutingModule } from './collection-routing.module';

import { CollectionPage } from './collection.page';
import { ComponentsModule } from '../components/components.module';
import { AddCollectionPageModule } from '../add-collection/add-collection.module';
import { EditCollectionPageModule } from '../edit-collection/edit-collection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CollectionPageRoutingModule,
    AddCollectionPageModule,
    EditCollectionPageModule
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
