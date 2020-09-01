import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSeriesPage } from './edit-series.page';

const routes: Routes = [
  {
    path: '',
    component: EditSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSeriesPageRoutingModule {}
