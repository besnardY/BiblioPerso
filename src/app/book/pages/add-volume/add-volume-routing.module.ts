import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVolumePage } from './add-volume.page';

const routes: Routes = [
  {
    path: '',
    component: AddVolumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVolumePageRoutingModule {}
