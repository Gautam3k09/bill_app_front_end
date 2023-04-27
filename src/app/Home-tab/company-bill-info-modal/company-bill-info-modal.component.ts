import { Component, Input, ViewChild ,ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-company-bill-info-modal',
  templateUrl: './company-bill-info-modal.component.html',
  styleUrls: ['./company-bill-info-modal.component.css']
})
export class CompanyBillInfoModalComponent {
   pdf :any=''
   slicedDate : any = ''
  @Input() data: any;
  constructor(private modalService: NgbModal) { }

  open(component: any) {
    this.modalService.open(component);
    // console.log(this.data,'asdas');
  }
  public convetToPDF()
{
this.pdf = document.getElementById('pdf');
html2canvas(this.pdf).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save(this.data.companyName + '_' + this.slicedDate  + '.pdf'); // Generated PDF
});
}
  ngOnInit() {
    // console.log(this.data.address);
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
     this.slicedDate = this.data.createdAt.slice(0,10);
     console.log(this.slicedDate);
  }
}
