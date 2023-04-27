import { Component, Injectable, OnInit, Output, TemplateRef,  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-company-machines-modal',
  templateUrl: './company-machines-modal.component.html',
  styleUrls: ['./company-machines-modal.component.css']
})
export class CompanyMachinesModalComponent {
  machineForm = new FormGroup({
    machineName: new FormControl(''),
    modelno: new FormControl(''),
    size: new FormControl(''),
    description: new FormControl(''),
  })

  modalRef?: BsModalRef;
  constructor(private appservice:AppServiceService,private modalService: BsModalService) {}
 
  ngOnInit(): void {
    
  }

  Addmachine() {
    console.log(this.machineForm.value)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
