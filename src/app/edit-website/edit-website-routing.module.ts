import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWebsitePage } from './edit-website.page';

const routes: Routes = [
  {
    path: '',
    component: EditWebsitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWebsitePageRoutingModule {}
