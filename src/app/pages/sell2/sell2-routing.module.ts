import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sell2Page } from './sell2.page';

const routes: Routes = [
  {
    path: '',
    component: Sell2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sell2PageRoutingModule {}
