import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-selected-item-modal',
  templateUrl: './selected-item-modal.component.html',
  styleUrls: ['./selected-item-modal.component.scss'],
})
export class SelectedItemModalComponent implements OnInit {


  quantity:any = 1;
  disValue:Number;

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }


  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

  addBTN(){

    if(this.disValue == null){
      this.disValue = 0;
    }

    if(this.apiCalls.selectedStock.currentStock >= this.quantity &&  this.disValue >=0){
      if(this.apiCalls.cartItems.includes(this.apiCalls.selectedStock)){
        this.apiCalls.cartInfo[this.apiCalls.selectedStock.name] += this.quantity
      }else{
        this.apiCalls.cartItems.push(this.apiCalls.selectedStock)
        this.apiCalls.cartInfo[this.apiCalls.selectedStock.name] = this.quantity
      }

      this.apiCalls.cardInfo_discount[this.apiCalls.selectedStock.name] = this.disValue
      this.closeBTN();
    }else{
      this.apiCalls.presentAlert("Invalid request",false)
      this.closeBTN();
    }
  }

  increment(){
    this.quantity += 1
  }

  decrement(){
    if(this.quantity > 1){
      this.quantity -= 1;
    }
  }

}
