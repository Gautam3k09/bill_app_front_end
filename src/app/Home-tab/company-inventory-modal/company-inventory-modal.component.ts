import { Component, Injectable, OnInit, Output, TemplateRef,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-company-inventory-modal',
  templateUrl: './company-inventory-modal.component.html',
  styleUrls: ['./company-inventory-modal.component.css']
})
export class CompanyInventoryModalComponent {
  InvtForm = new FormGroup({
    itemName: new FormControl(''),
    rate: new FormControl(''),
    condition: new FormControl(''),
    qty: new FormControl(''),
    description: new FormControl(''),
  })
  modalRef?: BsModalRef;
  constructor(private appservice:AppServiceService,private modalService: BsModalService) {}
 
  ngOnInit(): void {
    
  }

  AddInvtData() {
    this.appservice.postInventorydata(this.InvtForm.value).subscribe(
      (result)=>{
        // this.InvtForm.reset({
        //   date: '',
        //   billNo: '',
        //   companyName: '',
        //   gstNo: '',
        //   address: '',
        //   particulars: '',
        //   qty: '',
        //   rate: '',
        //   amount: '',
        //   totalAmount: '',
        //   igst:'',
        //   cgst:'',
        //   sgst: '',
        //   grandTotal: '',
        //   grandTotalInWords: '',
        // });
        console.log(result);
      },
      (err) => {
       console.log(err,'snd data err');
      }
    )
    // this.modalService.hide();
    
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
