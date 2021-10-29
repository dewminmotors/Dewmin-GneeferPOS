import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnsModalComponent } from './returns-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReturnsModalComponent],
  entryComponents:[ReturnsModalComponent],
  exports:[ReturnsModalComponent]
})
export class ReturnsModalComponentModule {}
