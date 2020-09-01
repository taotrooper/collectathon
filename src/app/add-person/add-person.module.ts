import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPersonPageRoutingModule } from './add-person-routing.module';

import { AddPersonPage } from './add-person.page';
import { ComponentsModule } from '../components/components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddPersonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddPersonPage]
})
export class AddPersonPageModule {}
