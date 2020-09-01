import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllgenresPageRoutingModule } from './allgenres-routing.module';

import { AllgenresPage } from './allgenres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AllgenresPageRoutingModule
  ],
  declarations: [AllgenresPage]
})
export class AllgenresPageModule {}
