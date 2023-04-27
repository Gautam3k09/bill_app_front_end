import { Component, Injectable, OnInit, Output, TemplateRef,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-company-bill-modal',
  templateUrl: './company-bill-modal.component.html',
  styleUrls: ['./company-bill-modal.component.css']
})
export class CompanyBillModalComponent {
  isCheckedIGST :boolean=false;
  isCheckedCGST :boolean=false;
  isCheckedSGST :boolean=false;

  addedItem :any= [];
  AmountwithTax : any = '';
  billItem : any = [];
  grandtotal : any = 0;
  grandTotalInWord : any = '';
  igstAmount : any = '';
  cgstAmount : any = '';
  sgstAmount : any = '';

  billForm = new FormGroup({
    billNo: new FormControl(''),
    companyName: new FormControl('',[Validators.required]),
    gstNo: new FormControl(''),
    address: new FormControl(''),
    particulars: new FormControl(''),
    qty: new FormControl(''),
    rate: new FormControl(''),
    amount: new FormControl(''),
    igst: new FormControl(''),
    cgst: new FormControl(''),
    sgst: new FormControl(''),
    grandTotal: new FormControl(''),
    grandTotalInWords: new FormControl(this.grandtotal),
    igst_box: new FormControl(''),
    pcs: new FormControl(''),
  });
  modalRef?: BsModalRef;

  constructor(private appservice:AppServiceService,private modalService: BsModalService) {
    
  }
  
 
  ngOnInit(): void {
    
  }

  sendData() {
    
    const directData ={ 
      billNo : this.billForm.value.billNo,
      companyName : this.billForm.value.companyName,
      Address : this.billForm.value.address,
      gstNo : this.billForm.value.gstNo,
      amountWord : this.grandTotalInWord,
      data:this.billItem,
      totalAmount:this.grandtotal,
    };

    console.log(directData);

    if(this.billForm.valid){
      this.appservice.postCompnayBill(directData).subscribe();
      //   (result)=>{
      //     this.billForm.reset({
      //       date: '',
      //       billNo: '',
      //       companyName: '',
      //       gstNo: '',
      //       address: '',
      //       particulars: '',
      //       qty: '',
      //       rate: '',
      //       amount: '',
      //       totalAmount: '',
      //       igst:'',
      //       cgst:'',
      //       sgst: '',
      //       grandTotal: '',
      //       grandTotalInWords: '',
      //     });
      //     this.modalService.hide();
      //   },
      //   (err) => {
      //    console.log(err,'snd data err');
      //   }
      // )
    }
    else{
      // this.billForm.markAllAsTouched();
    }
  }

  Itemdata(){

    const itemamount :number = (Number(this.billForm.value.rate) *  Number(this.billForm.value.qty));
    
    
   

    if (itemamount && this.billForm.value.igst && this.billForm.value.cgst && this.billForm.value.sgst ){
      this.igstAmount = ((parseFloat(this.billForm.value.igst)/100)* itemamount );

      this.cgstAmount = ((parseFloat(this.billForm.value.cgst)/100)* itemamount);

      this.sgstAmount = ((parseFloat(this.billForm.value.sgst)/100)* itemamount);

      const value =this.igstAmount+this.cgstAmount + this.sgstAmount;

      this.grandtotal =  this.grandtotal + itemamount + ((value/100)* itemamount);

      this.AmountwithTax = itemamount + this.igstAmount + this.cgstAmount + this.sgstAmount;
    } 
   
    else if (itemamount && this.billForm.value.cgst && this.billForm.value.sgst ){
      console.log('here')
      this.cgstAmount = ((parseFloat(this.billForm.value.cgst)/100)* itemamount );

      this.sgstAmount = ((parseFloat(this.billForm.value.sgst)/100)* itemamount);

      this.grandtotal =  this.grandtotal + itemamount + this.cgstAmount+this.sgstAmount;

      this.AmountwithTax = itemamount + this.cgstAmount + this.sgstAmount;
    }

    else  if (itemamount && this.billForm.value.igst){
      this.igstAmount = ((parseFloat(this.billForm.value.igst)/100)* itemamount);

      this.grandtotal = this.grandtotal +  itemamount + this.igstAmount;

      this.AmountwithTax =  itemamount +this.igstAmount;
    }
    
    this.addedItem ={
      'particular' : this.billForm.value.particulars,
      'qty' : this.billForm.value.qty,
      'rate': this.billForm.value.rate,
      'pcs': this.billForm.value.pcs,
      'amount' : itemamount ,
      'igst' : this.billForm.value.igst,
      'igstamount' : this.igstAmount ,
      'cgst' : this.billForm.value.cgst,
      'cgstamount' : this.cgstAmount ,
      'sgst' : this.billForm.value.sgst,
      'sgstamount' : this.sgstAmount ,
      'amountwithtax' : this.AmountwithTax,
    };

    this.billItem.push(this.addedItem);
    this.grandTotalInWord = this.numberToWords(this.grandtotal);
  }

  onChangeIgst(event: any): void {
    this.isCheckedIGST = event.target['checked']; // or event.target.checked
    console.log(this.isCheckedIGST);
  }

  onChangeCgst(event: any): void {
    this.isCheckedCGST = event.target['checked']; // or event.target.checked
    console.log(this.isCheckedCGST);
  }

  onChangeSgst(event: any): void {
    this.isCheckedSGST = event.target['checked']; // or event.target.checked
    console.log(this.isCheckedSGST);
  }

  updateName() {
    console.log(this.billForm.value)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }



  // number convert
   numberToWords(num: number): string {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'];

  if (num === 0) {
    return 'zero';
  }

  if (num < 0) {
    return 'minus ' + this.numberToWords(Math.abs(num));
  }

  let words = '';

  for (let i = 0; num > 0; i++) {
    const hundreds = num % 1000;
    const hundredsString = ones[Math.floor(hundreds / 100)] + (hundreds >= 100 ? ' hundred ' : '');
    let tensString = tens[Math.floor((hundreds % 100) / 10)];
    let onesString = ones[hundreds % 10];

    let scaleString = '';
    if (hundreds > 0 && i > 0) {
      scaleString = scales[i] + ' ';
    }

    if (tensString === 'ten' && onesString !== '') {
      tensString = '';
      onesString = teens[hundreds % 10 - 1];
    }

    words = hundredsString + tensString + (tensString && onesString ? '-' : '') + onesString + scaleString + words;
    num = Math.floor(num / 1000);
  }

  return words.trim();
}
}
