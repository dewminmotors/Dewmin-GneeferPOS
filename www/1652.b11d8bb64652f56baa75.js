(self.webpackChunkgneefer_pos_temp=self.webpackChunkgneefer_pos_temp||[]).push([[1652],{1652:(n,t,e)=>{"use strict";e.r(t),e.d(t,{ReturnsPageModule:()=>C});var o=e(8583),i=e(665),r=e(3083),c=e(649),l=e(4762),s=e(639),a=e(54);function g(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"ion-card",4),s.TgZ(1,"ion-row"),s.TgZ(2,"ion-col",5),s.TgZ(3,"div",6),s._uU(4),s.qZA(),s.qZA(),s.TgZ(5,"ion-col",5),s.TgZ(6,"div",6),s._uU(7),s.qZA(),s.qZA(),s.TgZ(8,"ion-col",5),s.TgZ(9,"ion-input",7),s.NdJ("ngModelChange",function(t){const e=s.CHM(n).$implicit;return s.oxw().returnQuantity[e.itemId]=t}),s.qZA(),s.qZA(),s.TgZ(10,"ion-col",5),s.TgZ(11,"ion-button",8),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().returnBTN(t)}),s._uU(12,"Return"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&n){const n=t.$implicit,e=s.oxw();s.Q6J("ngClass","available"),s.xp6(4),s.Oqu(n.name),s.xp6(3),s.Oqu(n.discPrice),s.xp6(2),s.Q6J("ngModel",e.returnQuantity[n.itemId])("min",0),s.xp6(2),s.Q6J("disabled",!1)}}let u=(()=>{class n{constructor(n,t){this.apiCalls=n,this.modalCtrl=t,this.returnQuantity={}}ngOnInit(){}closeBTN(){return(0,l.mG)(this,void 0,void 0,function*(){yield this.modalCtrl.dismiss()})}returnBTN(n){if(null!=this.returnQuantity[n.itemId]){var t=n.itemId,e=this.returnQuantity[n.itemId];this.returnQuantity[n.itemId]<=n.qty?(this.apiCalls.presentLoading("Please wait"),this.apiCalls.addStocks(t,"KUL",e).subscribe(n=>{this.apiCalls.loadingController.dismiss(),this.apiCalls.presentAlert("Stock returned",!1)},n=>{})):this.apiCalls.presentAlert("Error !! "+n.itemId+"  return quantity is greater",!1)}}returnItemName(n){this.apiCalls.getItemName(n).subscribe(n=>{console.log(n)},n=>{})}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(a.ef),s.Y36(r.IN))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-returns-modal"]],decls:23,vars:1,consts:[["color","danger","slot","end",3,"click"],["name","close"],[2,"text-align","center"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"long-text"],[1,"perElement"],["type","number","value","0",2,"background-color","white","color","black",3,"ngModel","min","ngModelChange"],["color","danger",3,"disabled","click"]],template:function(n,t){1&n&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-title"),s._uU(3,"Invoice"),s.qZA(),s.TgZ(4,"ion-button",0),s.NdJ("click",function(){return t.closeBTN()}),s._UZ(5,"ion-icon",1),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content"),s.TgZ(7,"ion-grid"),s.TgZ(8,"ion-row"),s.TgZ(9,"ion-col"),s.TgZ(10,"ion-card",2),s.TgZ(11,"h5"),s._uU(12,"Item Name"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"ion-col"),s.TgZ(14,"ion-card",2),s.TgZ(15,"h5"),s._uU(16,"Price"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(17,"ion-col"),s.TgZ(18,"ion-card",2),s.TgZ(19,"h5"),s._uU(20,"Return Quantity"),s.qZA(),s.qZA(),s.qZA(),s._UZ(21,"ion-col"),s.qZA(),s.YNc(22,g,13,6,"ion-card",3),s.qZA(),s.qZA()),2&n&&(s.xp6(22),s.Q6J("ngForOf",t.apiCalls.selectedInvoice.purchases))},directives:[r.Gu,r.sr,r.wd,r.YG,r.gu,r.W2,r.jY,r.Nd,r.wI,r.PM,o.sg,o.mk,r.pK,r.as,i.JJ,i.On],styles:["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.long-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.perElement[_ngcontent-%COMP%]{padding-top:10px;color:#fff}.available[_ngcontent-%COMP%]{background-color:#006403}.notavailable[_ngcontent-%COMP%]{background-color:#b92c20}"]}),n})();var d=e(4981);function p(n,t){if(1&n){const n=s.EpF();s.TgZ(0,"ion-card",4),s.NdJ("click",function(){const t=s.CHM(n).$implicit;return s.oxw().selectInvoice(t)}),s.TgZ(1,"ion-card-content"),s._uU(2),s.qZA(),s.qZA()}if(2&n){const n=t.$implicit;s.Q6J("ngClass","available"),s.xp6(2),s.Oqu(n.invId)}}const Z=[{path:"",component:(()=>{class n{constructor(n,t){this.apiCalls=n,this.modalCtrl=t,this.returnedInvoices=[]}ngOnInit(){this.apiCalls.encodeURL(),this.retreiveInvoices()}retreiveInvoices(){this.apiCalls.getInvoices().subscribe(n=>{this.returnedInvoices=n},n=>{console.error("Request failed with error"),this.apiCalls.decodeURL(),window.location.reload()})}selectInvoice(n){this.apiCalls.selectedInvoice=n,this.invoiceSelectEvent()}invoiceSelectEvent(){return(0,l.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:u});yield n.present()})}}return n.\u0275fac=function(t){return new(t||n)(s.Y36(a.ef),s.Y36(r.IN))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-returns"]],decls:12,vars:6,consts:[[3,"translucent"],["slot","start"],["placeholder","Search...","animated","true","showCancelButton","focus",3,"ngModel","ngModelChange"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"ngClass","click"]],template:function(n,t){1&n&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-menu-button"),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5,"Returns"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content"),s.TgZ(7,"ion-toolbar"),s.TgZ(8,"ion-searchbar",2),s.NdJ("ngModelChange",function(n){return t.filterTerm=n}),s.qZA(),s.qZA(),s._UZ(9,"br"),s.YNc(10,p,3,2,"ion-card",3),s.ALo(11,"filter"),s.qZA()),2&n&&(s.Q6J("translucent",!0),s.xp6(8),s.Q6J("ngModel",t.filterTerm),s.xp6(2),s.Q6J("ngForOf",s.xi3(11,3,t.returnedInvoices,t.filterTerm)))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.W2,r.VI,r.j9,i.JJ,i.On,o.sg,r.PM,o.mk,r.FN],pipes:[d.Z],styles:["ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.long-text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.perElement[_ngcontent-%COMP%]{padding-top:10px;padding-bottom:10px;color:#fff}.available[_ngcontent-%COMP%]{background-color:#de6a0a;color:#fff}.notavailable[_ngcontent-%COMP%]{background-color:#b92c20}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,r.Pc,i.u5,i.UX]]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[o.ez,i.u5,r.Pc,m,d.h,f]]}),n})()}}]);