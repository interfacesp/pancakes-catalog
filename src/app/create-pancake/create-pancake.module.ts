import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePancakePageRoutingModule } from './create-pancake-routing.module';

import { CreatePancakePage } from './create-pancake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePancakePageRoutingModule
  ],
  declarations: [CreatePancakePage]
})
export class CreatePancakePageModule {}
