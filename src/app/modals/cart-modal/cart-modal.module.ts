import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartModalComponent } from './cart-modal.component';
import { InvoiceModalComponentModule } from '../invoice-modal/invoice-modal.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    InvoiceModalComponentModule
  ],
  declarations: [CartModalComponent],
  entryComponents:[CartModalComponent],
  exports:[CartModalComponent]
})
export class CartModalComponentModule {}
