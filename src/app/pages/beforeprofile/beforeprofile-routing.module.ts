import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeprofilePage } from './beforeprofile.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeprofilePageRoutingModule {}
