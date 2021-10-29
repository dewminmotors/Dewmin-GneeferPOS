import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnsPageRoutingModule } from './returns-routing.module';

import { ReturnsPage } from './returns.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReturnsModalComponentModule } from 'src/app/modals/returns-modal/returns-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnsPageRoutingModule,
    Ng2SearchPipeModule,
    ReturnsModalComponentModule
  ],
  declarations: [ReturnsPage]
})
export class ReturnsPageModule {}
