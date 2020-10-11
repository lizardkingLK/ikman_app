import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromotePageRoutingModule } from './promote-routing.module';

import { PromotePage } from './promote.page';
import {InputModule} from '../../components/input/input.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PromotePageRoutingModule,
        InputModule
    ],
  declarations: [PromotePage]
})
export class PromotePageModule {}
