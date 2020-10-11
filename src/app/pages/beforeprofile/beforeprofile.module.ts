import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeprofilePageRoutingModule } from './beforeprofile-routing.module';

import { BeforeprofilePage } from './beforeprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeprofilePageRoutingModule
  ],
  declarations: [BeforeprofilePage]
})
export class BeforeprofilePageModule {}
