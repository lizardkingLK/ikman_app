import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Buy2Page } from './buy2.page';

const routes: Routes = [
  {
    path: '',
    component: Buy2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Buy2PageRoutingModule {}
