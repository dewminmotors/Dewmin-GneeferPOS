import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


//MODALS
export class Invoice {
  username: string;
  payMethod: string;
  totDiscount:Number;
  totValue:Number;
  branchCode:String;
  totalItems:Number;
  purchases:JSON[];
}

export class invoiceItem {
  itemId: string;
  name:string;
  unitPrice: Number;
  disc: Number;
  discPrice:Number;
  qty:Number;
  brandName:String;
}

export class user{
  username:string;
  password:string;
}

//END

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  

  stocksEndpoint = 'https://dewmin-gneeferserver.herokuapp.com/api/stock/branchCode/KUL/';  //Hard coded branch id 
  invoiceEndpoint = 'https://dewmin-gneeferserver.herokuapp.com/api/invoice/';

  stocksReturnEndpoint = 'https://dewmin-gneeferserver.herokuapp.com/api/stock/';
  itemNameEndpoint = "https://dewmin-gneeferserver.herokuapp.com/api/item/namebyid/";
  loginEndpoint = 'https://dewmin-gneeferserver.herokuapp.com/api/auth/signin';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  //used in Main page
  selectedStock:any

  //used in cart
  cartItems:any = []
  cartInfo:any = {}
  cardInfo_discount:any = {}

  //used in returns
  selectedInvoice:any

  //used in login page
  requirePane = true
  loggedInstat = false
  //End

  constructor(
    private httpClient: HttpClient,
    public loadingController:LoadingController,
    public alertcontroller:AlertController,
    private router:Router,
    private location: Location
  ) { }

    //#region Generals
    async presentLoading(messageLoading) {
      const loading = await this.loadingController.create({
        message: messageLoading,
      });
      await loading.present();
    }
  
    async presentAlert(message:string,reloadStat:boolean){
      const alert = await this.alertcontroller.create({
        message : message,
        buttons : [{
          text : 'Close',
          role: 'cancel',
          handler: () => {
            if(reloadStat){
              this.decodeURL()
              window.location.reload()
            }
          }
        }]
      });
  
      await alert.present();
    }

    logOut(){
      this.presentLoading("Logging out")
      this.router.navigate(['/login'])
    }
  
    //#endregion


  getStocks(): Observable<any> {
    return this.httpClient.get(this.stocksEndpoint)
  }

  sendInvoice(invData:Invoice): Observable<any> {
    return this.httpClient.post<Invoice>(this.invoiceEndpoint, JSON.stringify(invData), this.httpOptions)
  }

  getInvoices(): Observable<any> {
    return this.httpClient.get(this.invoiceEndpoint)
  }

  addStocks(itemId,_branchCode,_qty): Observable<any> {
    return this.httpClient.put(this.stocksReturnEndpoint + "update/" + _branchCode + "/" + itemId + "/" + _qty, this.httpOptions)
  }

  getItemName(_itemId): Observable<any> {
    return this.httpClient.get(this.itemNameEndpoint + _itemId )
  }

    //#region user_login
    userLogin(creds:user): Observable<any> {
      return this.httpClient.post<user>(this.loginEndpoint, JSON.stringify(creds), this.httpOptions)
    }
    //#endregion

    //Url Encoder section
    encodeURL(){
      this.location.replaceState('/Gneefer_ERP');
    }
    decodeURL(){
      var currentLocation  = this.router.url;
      this.location.replaceState(currentLocation);
    }
    //end section
}
