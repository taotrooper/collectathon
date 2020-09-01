import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MycomicsPageRoutingModule } from './mycomics-routing.module';

import { MycomicsPage } from './mycomics.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    MycomicsPageRoutingModule
  ],
  declarations: [MycomicsPage]
})
export class MycomicsPageModule {}
