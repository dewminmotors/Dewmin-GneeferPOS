import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { InvoiceModalComponent } from '../invoice-modal/invoice-modal.component';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
})
export class CartModalComponent implements OnInit {
  
  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }


  returnTotalDiscount(perDiscount,quantity){
    return perDiscount * quantity;
  }

  returnNetValue(perPrice,quantity,perDiscount){
    var totalDis = this.returnTotalDiscount(perDiscount,quantity);
    return (perPrice*quantity) - totalDis;
  }

  checkout(){
    if(this.apiCalls.cartItems.length > 0){
      this.checkoutEvent()
      this.closeBTN();
    }else{
      this.apiCalls.presentAlert("Nothing to checkout",false)
    }
  }

  async checkoutEvent(){
    const modal = await this.modalCtrl.create({
      component : InvoiceModalComponent
    })
    await modal.present()
  }

  increment(item){
    this.apiCalls.cartInfo[item.name] += 1;
  }

  decrement(item){
    if(this.apiCalls.cartInfo[item.name] > 0){
      this.apiCalls.cartInfo[item.name] -= 1
    }
  }

}
