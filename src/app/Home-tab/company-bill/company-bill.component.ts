import { Component,OnInit  } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { CompanyBillInfoModalComponent } from '../company-bill-info-modal/company-bill-info-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-bill',
  templateUrl: './company-bill.component.html',
  styleUrls: ['./company-bill.component.css']
})
export class CompanyBillComponent {
	bill_data: any;
	constructor(private appservice:AppServiceService,private modalService: NgbModal){}

  ngOnInit() {
	this.getBilldata();
  }

 billModal(data:any){
	const modalRef=this.modalService.open(CompanyBillInfoModalComponent,{windowClass:"xlModal"});
	modalRef.componentInstance.data = data;
 };

 getBilldata(){
	this.appservice.getCompnayBill().subscribe( (result: any)=>{
		if(result){
			this.bill_data = result
			console.log(this.bill_data);
			}
		},
		(err) => {
			console.log(err,'snd data err');
		})
 	}
}


