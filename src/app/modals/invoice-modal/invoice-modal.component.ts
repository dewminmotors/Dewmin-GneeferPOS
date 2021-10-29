import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiCallsService, Invoice, invoiceItem } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.scss'],
})
export class InvoiceModalComponent implements OnInit {

  billTotalDiscount:any = 0;
  billTotal:any = 0;

  invoiceData : Invoice = {
    username: "",
    payMethod: "CASH",
    totDiscount: 0,
    totValue: 0,
    branchCode: "KUL",
    totalItems: 0,
    purchases: []

  }

  invoicePuchaseData:invoiceItem = {
    itemId : "",
    name:"",
    unitPrice: 0,
    disc:0,
    discPrice:0,
    qty:0,
    brandName:""
  }

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl:ModalController,
  ) { }

  ngOnInit() {
    this.apiCalls.cartItems.forEach(e => {
      this.returnTotalDiscount(this.apiCalls.cardInfo_discount[e.name],this.apiCalls.cartInfo[e.name]);
      this.returnBillTotal(e.price,this.apiCalls.cardInfo_discount[e.name],this.apiCalls.cartInfo[e.name]);

      var i:invoiceItem = {
        itemId : e.itemId,
        name:e.name,
        unitPrice: e.price,
        disc:this.apiCalls.cardInfo_discount[e.name] * (e.price/100),
        discPrice: e.price * this.apiCalls.cartInfo[e.name] - this.apiCalls.cardInfo_discount[e.name] * (e.price/100) * this.apiCalls.cartInfo[e.name],
        qty:this.apiCalls.cartInfo[e.name],
        brandName:""
      }

      this.invoiceData.purchases.push(JSON.parse(JSON.stringify(i)));
    });

    this.invoiceData.totDiscount = this.billTotalDiscount;
    this.invoiceData.totValue = this.billTotal;
    this.invoiceData.totalItems = this.apiCalls.cartItems.length;
  }

  async closeBTN(){
    await this.modalCtrl.dismiss();
  }

  returnTotalDiscount(perDiscount,quantity){
    var perTotalDis =  perDiscount * quantity;
    this.billTotalDiscount += perTotalDis;
  }

  returnNetValuePerItem(perPrice,perDiscount,quantity){
    var perTotal =  (perPrice * quantity) - (perDiscount*quantity);
    return perTotal;
  }

  returnBillTotal(perPrice,perDiscount,quantity){
    var perTotal =  (perPrice * quantity) - (perDiscount*quantity);
    this.billTotal += perTotal;
  }

  printInvoice(){
    this.processInvoice();

    const printContent = document.getElementById("invoice-POS");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();

    this.closeBTN();
  }

  digitalInvoice(){
    this.processInvoice();
  }

  processInvoice(){  
  this.apiCalls.sendInvoice(this.invoiceData)
    .subscribe(
      (response) => {   
        this.apiCalls.presentAlert("Done",true);
      },
      (error) => {    
      })

    this.apiCalls.cartItems = []
    this.apiCalls.cartInfo ={}
  }

}
