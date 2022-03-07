import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePancakePage } from './create-pancake.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePancakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePancakePageRoutingModule {}
