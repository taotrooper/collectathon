import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonPageRoutingModule } from './person-routing.module';

import { PersonPage } from './person.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    PersonPageRoutingModule
  ],
  declarations: [PersonPage]
})
export class PersonPageModule {}
