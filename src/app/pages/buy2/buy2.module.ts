import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Buy2PageRoutingModule } from './buy2-routing.module';

import { Buy2Page } from './buy2.page';
import {InputModule} from '../../components/input/input.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Buy2PageRoutingModule,
        InputModule
    ],
  declarations: [Buy2Page]
})
export class Buy2PageModule {}
