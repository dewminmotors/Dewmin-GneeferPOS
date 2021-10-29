import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReturnsModalComponent } from 'src/app/modals/returns-modal/returns-modal.component';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.page.html',
  styleUrls: ['./returns.page.scss'],
})
export class ReturnsPage implements OnInit {

  filterTerm:string;
  returnedInvoices = [];

  constructor(
    public apiCalls:ApiCallsService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.apiCalls.encodeURL();
    this.retreiveInvoices();
  }

  retreiveInvoices(){
    this.apiCalls.getInvoices()
      .subscribe(
        (response) => {                           
          this.returnedInvoices = response
        },
        (error) => {                            
          console.error('Request failed with error')
          this.apiCalls.decodeURL();
          window.location.reload();
        })
  }

  selectInvoice(event : any){
    this.apiCalls.selectedInvoice = event;
    this.invoiceSelectEvent()
  }

  async invoiceSelectEvent(){
    const modal = await this.modalCtrl.create({
      component : ReturnsModalComponent
    })
    await modal.present()
  }

}
