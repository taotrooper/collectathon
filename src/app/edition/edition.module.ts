import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditionPageRoutingModule } from './edition-routing.module';

import { EditionPage } from './edition.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditionPage],
})
export class EditionPageModule {}
