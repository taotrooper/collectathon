import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyvideoPage } from './myvideo.page';

const routes: Routes = [
  {
    path: '',
    component: MyvideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyvideoPageRoutingModule {}
