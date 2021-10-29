import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { CartModalComponentModule } from 'src/app/modals/cart-modal/cart-modal.module';
import { SelectedItemModalComponentModule } from 'src/app/modals/selected-item-modal/selected-item-modal';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    CartModalComponentModule,
    SelectedItemModalComponentModule,
    Ng2SearchPipeModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
