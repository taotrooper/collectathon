import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllseriesPage } from './allseries.page';

const routes: Routes = [
  {
    path: '',
    component: AllseriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllseriesPageRoutingModule {}
