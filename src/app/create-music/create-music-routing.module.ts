import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateMusicPage } from './create-music.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMusicPageRoutingModule {}
