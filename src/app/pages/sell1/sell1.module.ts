import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sell1PageRoutingModule } from './sell1-routing.module';

import { Sell1Page } from './sell1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sell1PageRoutingModule
  ],
  declarations: [Sell1Page]
})
export class Sell1PageModule {}
