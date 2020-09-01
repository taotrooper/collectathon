import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllgenresPage } from './allgenres.page';

const routes: Routes = [
  {
    path: '',
    component: AllgenresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllgenresPageRoutingModule {}
