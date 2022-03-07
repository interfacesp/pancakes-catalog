import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PancakePageRoutingModule } from './pancake-routing.module';

import { PancakePage } from './pancake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PancakePageRoutingModule
  ],
  declarations: [PancakePage]
})
export class PancakePageModule {}
