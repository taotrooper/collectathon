import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPersonPageRoutingModule } from './edit-person-routing.module';

import { EditPersonPage } from './edit-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditPersonPageRoutingModule
  ],
  declarations: [EditPersonPage]
})
export class EditPersonPageModule {}
