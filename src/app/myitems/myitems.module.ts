import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyitemsPageRoutingModule } from './myitems-routing.module';

import { MyitemsPage } from './myitems.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    MyitemsPageRoutingModule
  ],
  declarations: [MyitemsPage]
})
export class MyitemsPageModule {}
