import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sell1Page } from './sell1.page';

const routes: Routes = [
  {
    path: '',
    component: Sell1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sell1PageRoutingModule {}
