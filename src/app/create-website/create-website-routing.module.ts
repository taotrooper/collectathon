import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWebsitePage } from './create-website.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWebsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWebsitePageRoutingModule {}
