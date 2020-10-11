import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterhomePage } from './afterhome.page';

const routes: Routes = [
  {
    path: '',
    component: AfterhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterhomePageRoutingModule {}
