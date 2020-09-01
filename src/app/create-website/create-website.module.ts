import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWebsitePageRoutingModule } from './create-website-routing.module';

import { CreateWebsitePage } from './create-website.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateWebsitePageRoutingModule
  ],
  declarations: [CreateWebsitePage]
})
export class CreateWebsitePageModule {}
