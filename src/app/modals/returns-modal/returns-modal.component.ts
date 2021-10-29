import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-returns-modal',
  templateUrl: './returns-modal.component.html',
  styleUrls: ['./returns-modal.component.scss'],
})
export class ReturnsModalComponent implements OnInit {

  returnQuantity = {};

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

 returnBTN(e){
      if(this.returnQuantity[e.itemId] != null){
        var itemID = e.itemId;
        var branchCode = "KUL";
        var qty = this.returnQuantity[e.itemId]
        
        if(this.returnQuantity[e.itemId] <= e.qty){
          this.apiCalls.presentLoading("Please wait")
          this.apiCalls.addStocks(itemID,branchCode,qty)
          .subscribe(
            (response) => {            
              this.apiCalls.loadingController.dismiss()
              this.apiCalls.presentAlert("Stock returned",false);
            },
            (error) => {          
                 
            })
        }else{
          this.apiCalls.presentAlert("Error !! "+ e.itemId + "  return quantity is greater",false);
        }
      }
  }

  returnItemName(_id){
    this.apiCalls.getItemName(_id)
          .subscribe(
            (response) => {            
              console.log(response);
            },
            (error) => {          
                 
      })
  }

}
