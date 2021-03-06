import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceModalComponent } from './invoice-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InvoiceModalComponent],
  entryComponents:[InvoiceModalComponent],
  exports:[InvoiceModalComponent]
})
export class InvoiceModalComponentModule {}
