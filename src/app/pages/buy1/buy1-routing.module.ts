import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Buy1Page } from './buy1.page';

const routes: Routes = [
  {
    path: '',
    component: Buy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Buy1PageRoutingModule {}
