import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterhomePageRoutingModule } from './afterhome-routing.module';

import { AfterhomePage } from './afterhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterhomePageRoutingModule
  ],
  declarations: [AfterhomePage]
})
export class AfterhomePageModule {}
