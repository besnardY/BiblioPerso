import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVolumePageRoutingModule } from './add-volume-routing.module';

import { AddVolumePage } from './add-volume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVolumePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddVolumePage]
})
export class AddVolumePageModule {}
