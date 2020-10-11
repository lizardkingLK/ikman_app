import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Buy1PageRoutingModule } from './buy1-routing.module';

import { Buy1Page } from './buy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Buy1PageRoutingModule
  ],
  declarations: [Buy1Page]
})
export class Buy1PageModule {}
