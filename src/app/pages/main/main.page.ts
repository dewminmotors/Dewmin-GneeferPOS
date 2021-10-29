import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SelectedItemModalComponent } from 'src/app/modals/selected-item-modal/selected-item-modal.component';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { Location } from '@angular/common';
import { CartModalComponent } from 'src/app/modals/cart-modal/cart-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  filterTerm:string;
  returnedItems = [];

  constructor(
    public apicalls :ApiCallsService,
    private modalCtrl: ModalController,
    private router:Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAllStocks();
    this.apicalls.encodeURL();
  }

  getAllStocks(){
    this.apicalls.getStocks()
      .subscribe(
        (response) => {                           
          this.returnedItems = response
        },
        (error) => {                            
          console.error('Request failed with error')
          this.apicalls.decodeURL();
          window.location.reload();
        })
  }

  async selectedStockEvent(){
    const modal = await this.modalCtrl.create({
      component : SelectedItemModalComponent
    })
    await modal.present()
  }

  selectStock(event : any){
    this.apicalls.selectedStock = event;
    this.selectedStockEvent()
  }

  async cartEvent(){
    const modal = await this.modalCtrl.create({
      component : CartModalComponent
    })
    await modal.present()
  }

  openCart(){
    this.cartEvent()
  }

}
