import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSeriesPage } from './create-series.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSeriesPageRoutingModule {}
