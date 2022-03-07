import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PancakePage } from './pancake.page';

const routes: Routes = [
  {
    path: ':pancakeId',
    component: PancakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PancakePageRoutingModule {}
