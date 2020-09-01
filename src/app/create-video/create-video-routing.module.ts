import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateVideoPage } from './create-video.page';

const routes: Routes = [
  {
    path: '',
    component: CreateVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateVideoPageRoutingModule {}
