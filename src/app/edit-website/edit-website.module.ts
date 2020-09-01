import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWebsitePageRoutingModule } from './edit-website-routing.module';

import { EditWebsitePage } from './edit-website.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditWebsitePageRoutingModule
  ],
  declarations: [EditWebsitePage]
})
export class EditWebsitePageModule {}
