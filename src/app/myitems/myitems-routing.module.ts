import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyitemsPage } from './myitems.page';

const routes: Routes = [
  {
    path: '',
    component: MyitemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyitemsPageRoutingModule {}
