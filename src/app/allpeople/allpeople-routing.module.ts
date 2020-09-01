import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllpeoplePage } from './allpeople.page';

const routes: Routes = [
  {
    path: '',
    component: AllpeoplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllpeoplePageRoutingModule {}
