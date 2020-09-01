import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllpeoplePageRoutingModule } from './allpeople-routing.module';
import { ComponentsModule } from '../components/components.module'
import { AllpeoplePage } from './allpeople.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AllpeoplePageRoutingModule
  ],
  declarations: [AllpeoplePage]
})
export class AllpeoplePageModule {}
