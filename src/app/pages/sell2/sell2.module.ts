import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sell2PageRoutingModule } from './sell2-routing.module';

import { Sell2Page } from './sell2.page';
import {InputModule} from '../../components/input/input.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Sell2PageRoutingModule,
        InputModule
    ],
  declarations: [Sell2Page]
})
export class Sell2PageModule {}
