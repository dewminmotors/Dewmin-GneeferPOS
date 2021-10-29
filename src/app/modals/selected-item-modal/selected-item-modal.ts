import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedItemModalComponent } from './selected-item-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SelectedItemModalComponent],
  entryComponents:[SelectedItemModalComponent],
  exports:[SelectedItemModalComponent]
})
export class SelectedItemModalComponentModule {}
