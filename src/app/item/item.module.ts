import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';
import { CreateWebsitePageModule } from '../create-website/create-website.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    CreateWebsitePageModule,
    ComponentsModule
  ],
  declarations: [ItemPage],
})
export class ItemPageModule {}
